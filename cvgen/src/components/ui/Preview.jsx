import { useContext } from "react";
import { Button } from "./button";
import { Download, Printer } from "lucide-react";
import cvContext from "../../context/CvContext.js";

const Preview = () => {
  const contextData = useContext(cvContext);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    alert("Download functionality would be implemented here");
  };

  // Utility functions
  const formatDate = (monthString) => {
    if (!monthString) return '';
    const [year, month] = monthString.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                       'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month)-1]} ${year}`;
  };

  const formatJobDescription = (text) => {
    if (!text) return [];
    return text
      .split(/[.;]\s*|\n/)
      .map(point => point.trim())
      .filter(point => point.length > 0);
  };

  const renderArraySection = (data, renderItem) => {
    if (!Array.isArray(data)) return null;
    return data
      .filter(item => item && Object.keys(item).some(key => item[key]))
      .map(renderItem);
  };

  const renderObjectSection = (data, renderItem) => {
    if (!data || typeof data !== 'object') return null;
    return renderItem(data);
  };

  // Section renderers
  const renderHeader = () => (
    <div className="text-center mb-4">
      <h1 style={{
        fontSize: "20pt",
        fontWeight: "bold",
        marginBottom: "8px",
        letterSpacing: "0.5px",
      }}>
        {contextData.profileData?.name || "Your Name"}
      </h1>

      <div style={{
        fontSize: "10pt",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginBottom: "4px",
      }}>
        {contextData.profileData?.email && (
          <span>📧 {contextData.profileData.email}</span>
        )}
        {contextData.links?.website_url && (
          <a href={contextData.links.website_url}>
            <span>🌐 {contextData.links.website_text || contextData.links.website_url}</span>
          </a>
        )}
        {contextData.links?.linkedin_url && (
          <a href={contextData.links.linkedin_url}>
            <span>💼 {contextData.links.linkedin_text || "LinkedIn"}</span>
          </a>
        )}
        {contextData.links?.github_url && (
          <a href={contextData.links.github_url}>
            <span>🐙 {contextData.links.github_text || "GitHub"}</span>
          </a>
        )}
        {contextData.profileData?.phone && (
          <span>📱 {contextData.profileData.phone}</span>
        )}
        {contextData.profileData?.address && (
          <span>📍 {contextData.profileData.address}</span>
        )}
      </div>
    </div>
  );

const renderSkills = () => {
  if (!contextData.skillsData) return null;
  
  // Check if any skills data exists
  const hasSkills = Object.values(contextData.skillsData).some(skill => 
    skill && skill.trim() !== ""
  );
  
  if (!hasSkills) return null;

  // Define skill categories and their display names
  const skillCategories = {
    programmingLanguages: "Programming Languages",
    frameworksTools: "Frameworks & Tools", 
    databases: "Databases & Storage",
    communicationLeadership: "Communication & Leadership",
    problemSolvingCollaboration: "Problem Solving & Collaboration",
    languages: "Languages"
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <h2 style={{
        fontSize: "12pt",
        fontWeight: "bold",
        marginBottom: "8px",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
      }}>
        SKILLS
      </h2>

      <div style={{ fontSize: "11pt", lineHeight: "1.4" }}>
        {Object.entries(skillCategories).map(([key, displayName]) => {
          const skillValue = contextData.skillsData[key];
          if (!skillValue || skillValue.trim() === "") return null;
          
          return (
            <div key={key} style={{ marginBottom: "4px" }}>
              <strong>{displayName}:</strong> {skillValue}
            </div>
          );
        })}
      </div>
    </div>
  );
};

  const renderProjects = () => {
    if (!contextData.projectsData) return null;
    
    return renderArraySection(contextData.projectsData, (project, index) => (
      <div key={index} style={{ marginBottom: "12px" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: "4px",
        }}>
          <strong style={{ fontSize: "11pt" }}>{project.name || `Project ${index + 1}`}</strong>
          <span style={{
            fontSize: "10pt",
            fontStyle: "italic",
            color: "#333",
          }}>
            {project.technologies || project.techStack || ""}
          </span>
        </div>

        {project.description && (
          <ul style={{
            marginLeft: "16px",
            marginBottom: "6px",
            fontSize: "11pt",
          }}>
            {formatJobDescription(project.description).map((point, idx) => (
              <li key={idx} style={{ marginBottom: "1px" }}>{point}</li>
            ))}
          </ul>
        )}

        {(project.codeUrl || project.liveUrl) && (
          <div style={{ fontSize: "10pt", marginLeft: "0px" }}>
            {project.codeUrl && (
              <>
                <strong>Code:</strong>{" "}
                <a href={project.codeUrl} style={{ color: "#0066cc", textDecoration: "underline" }}>
                  Repository
                </a>
              </>
            )}
            {project.liveUrl && (
              <>
                <span style={{ margin: "0 8px" }}>Demo:</span>
                <a href={project.liveUrl} style={{ color: "#0066cc", textDecoration: "underline" }}>
                  Live Preview
                </a>
              </>
            )}
          </div>
        )}
      </div>
    ));
  };

  const renderCertifications = () => {
    if (!contextData.certificationsData) return null;
    
    const validCerts = contextData.certificationsData.filter(cert => cert?.name);
    if (validCerts.length === 0) return null;

    return (
      <div style={{ marginBottom: "16px" }}>
        <h2 style={{
          fontSize: "12pt",
          fontWeight: "bold",
          marginBottom: "8px",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}>
          CERTIFICATIONS
        </h2>

        <div style={{ fontSize: "11pt", lineHeight: "1.3" }}>
          {validCerts.map((cert, index) => (
            <div key={index} style={{ marginBottom: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>{cert.name}</strong>
                {cert.issueDate && <span>{formatDate(cert.issueDate)}</span>}
              </div>
              {cert.organization && (
                <div style={{ fontStyle: "italic" }}>{cert.organization}</div>
              )}
              {cert.url && (
                <div style={{ fontSize: "10pt" }}>
                  <a href={cert.url} style={{ color: "#0066cc", textDecoration: "underline" }}>
                    View Certificate
                  </a>
                  {cert.expiryDate && (
                    <span style={{ marginLeft: "10px" }}>
                      • Expires: {formatDate(cert.expiryDate)}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderEducation = () => {
    const eduArray = Array.isArray(contextData.eduData) ? contextData.eduData : [contextData.eduData];
    const validEducation = eduArray.filter(edu => edu && (edu.university || edu.degree));
    
    if (validEducation.length === 0) return null;

    return (
      <div style={{ marginBottom: "16px" }}>
        <h2 style={{
          fontSize: "12pt",
          fontWeight: "bold",
          marginBottom: "8px",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}>
          EDUCATION
        </h2>

        {validEducation.map((edu, index) => (
          <div key={index} style={{ marginBottom: "12px" }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: "2px",
            }}>
              <strong style={{ fontSize: "11pt" }}>
                {edu.university || "University Name"}
              </strong>
              <span style={{ fontSize: "10pt", color: "#333" }}>
                {formatDate(edu.enddate || edu.month)}
              </span>
            </div>

            <div style={{
              fontSize: "11pt",
              fontStyle: "italic",
              marginBottom: "4px",
              display: "flex",
              justifyContent: "space-between",
            }}>
              <span>{edu.degree || "Degree"}</span>
              <span style={{ color: "#333" }}>{edu.location || ""}</span>
            </div>

            {edu.description && (
              <ul style={{ marginLeft: "16px", fontSize: "11pt" }}>
                {formatJobDescription(edu.description).map((point, idx) => (
                  <li key={idx} style={{ marginBottom: "1px" }}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderExperience = () => {
    const expArray = Array.isArray(contextData.experience) ? contextData.experience : [contextData.experience];
    const validExperience = expArray.filter(exp => exp && (exp.company_name || exp.job_title));
    
    if (validExperience.length === 0) return null;

    return (
      <div style={{ marginBottom: "16px" }}>
        <h2 style={{
          fontSize: "12pt",
          fontWeight: "bold",
          marginBottom: "8px",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}>
          EXPERIENCE
        </h2>

        {validExperience.map((exp, index) => (
          <div key={index} style={{ marginBottom: "12px" }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: "2px",
            }}>
              <strong style={{ fontSize: "11pt" }}>
                {exp.company_name || "Company Name"}
              </strong>
              <span style={{ fontSize: "10pt", color: "#333" }}>
                {formatDate(exp.start_date)} - {exp.end_date ? formatDate(exp.end_date) : "Present"}
              </span>
            </div>

            <div style={{
              fontSize: "11pt",
              fontStyle: "italic",
              marginBottom: "4px",
              display: "flex",
              justifyContent: "space-between",
            }}>
              <span>{exp.job_title || "Job Title"}</span>
              <span style={{ color: "#333" }}>{exp.location || ""}</span>
            </div>

            {exp.job_description && (
              <ul style={{ marginLeft: "16px", fontSize: "11pt" }}>
                {formatJobDescription(exp.job_description).map((point, idx) => (
                  <li key={idx} style={{ marginBottom: "1px" }}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Dynamic section renderer
  const renderDynamicSections = () => {
    const sections = [];
    
    // Add sections based on available data
    if (contextData.skillsData) sections.push({ key: 'skills', component: renderSkills() });
    if (contextData.projectsData) sections.push({ key: 'projects', component: renderProjects() });
    if (contextData.certificationsData) sections.push({ key: 'certifications', component: renderCertifications() });
    if (contextData.eduData) sections.push({ key: 'education', component: renderEducation() });
    if (contextData.experience) sections.push({ key: 'experience', component: renderExperience() });

    // Add any additional sections from context
    Object.entries(contextData).forEach(([key, value]) => {
      if (!['profileData', 'links', 'skillsData', 'projectsData', 'certificationsData', 'eduData', 'experience'].includes(key)) {
        if (Array.isArray(value) && value.length > 0) {
          sections.push({
            key,
            component: (
              <div key={key} style={{ marginBottom: "16px" }}>
                <h2 style={{
                  fontSize: "12pt",
                  fontWeight: "bold",
                  marginBottom: "8px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}>
                  {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                </h2>
                {/* Generic renderer for unknown sections */}
                <div style={{ fontSize: "11pt" }}>
                  {value.map((item, index) => (
                    <div key={index} style={{ marginBottom: "8px" }}>
                      {Object.entries(item).map(([field, val]) => (
                        val && <div key={field}><strong>{field}:</strong> {val}</div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )
          });
        }
      }
    });

    return sections.map(section => section.component).filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header Controls */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800 mb-2">Resume Preview</h1>
          <p className="text-sm text-gray-500">Review your resume before downloading</p>
        </div>
        <div className="flex gap-3">
          <Button onClick={handlePrint} variant="outline" className="flex items-center gap-2 text-sm py-2 px-4 border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition-colors">
            <Printer className="w-4 h-4" />
            Print
          </Button>
          <Button onClick={handleDownload} className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white text-sm py-2 px-4 rounded-md shadow-sm transition-colors">
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* CV Preview Container */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
        <div className="cv-content p-16" style={{
          fontFamily: 'Times, "Times New Roman", serif',
          fontSize: "11pt",
          lineHeight: "1.4",
          color: "#000",
        }}>
          {/* Header Section */}
          {renderHeader()}

          {/* Horizontal Line */}
          <hr style={{
            border: "none",
            borderTop: "1px solid #000",
            margin: "16px 0",
          }} />

          {/* Dynamic Sections */}
          {renderDynamicSections()}

          {/* Professional Summary */}
          {contextData.profileData?.summary && (
            <div style={{ marginBottom: "16px" }}>
              <h2 style={{
                fontSize: "12pt",
                fontWeight: "bold",
                marginBottom: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}>
                SUMMARY
              </h2>
              <p style={{ fontSize: "11pt", lineHeight: "1.4" }}>
                {contextData.profileData.summary}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto mt-6 text-center text-gray-500 text-sm">
        <p>This resume was generated using CV Generator</p>
      </div>
    </div>
  );
};

export default Preview;