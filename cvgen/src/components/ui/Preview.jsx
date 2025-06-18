import { useContext } from "react";
import { Button } from "./button";
import { Download, Printer } from "lucide-react";
import cvContext from "../../context/CvContext.js";
import "../styles/preview.css";

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

  // Section renderers
  const renderHeader = () => (
    <div className="cv-header">
      <h1 className="cv-header-name">
        {contextData.profileData?.name || "Your Name"}
      </h1>

      <div className="cv-header-contact">
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
    
    const hasSkills = Object.values(contextData.skillsData).some(skill => 
      skill && skill.trim() !== ""
    );
    
    if (!hasSkills) return null;

    const skillCategories = {
      programmingLanguages: "Programming Languages",
      frameworksTools: "Frameworks & Tools", 
      databases: "Databases & Storage",
      communicationLeadership: "Communication & Leadership",
      problemSolvingCollaboration: "Problem Solving & Collaboration",
      languages: "Languages"
    };

    return (
      <div className="cv-section">
        <h2 className="cv-section-title">SKILLS</h2>
        <div className="cv-section-content">
          {Object.entries(skillCategories).map(([key, displayName]) => {
            const skillValue = contextData.skillsData[key];
            if (!skillValue || skillValue.trim() === "") return null;
            
            return (
              <div key={key} className="cv-skills-category">
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
    
    const validProjects = contextData.projectsData.filter(project => 
      project && (project.name || project.description)
    );
    
    if (validProjects.length === 0) return null;

    return (
      <div className="cv-section">
        <h2 className="cv-section-title">PROJECTS</h2>
        <div className="cv-section-content">
          {validProjects.map((project, index) => (
            <div key={index} className="cv-item">
              <div className="cv-project-header">
                <span className="cv-project-title">
                  {project.name || `Project ${index + 1}`}
                </span>
                <span className="cv-project-tech">
                  {project.technologies || project.techStack || ""}
                </span>
              </div>

              {project.description && (
                <ul className="cv-item-description">
                  {formatJobDescription(project.description).map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}

              {(project.codeUrl || project.liveUrl) && (
                <div className="cv-project-links">
                  {project.codeUrl && (
                    <>
                      <strong>Code:</strong>{" "}
                      <a href={project.codeUrl}>Repository</a>
                    </>
                  )}
                  {project.liveUrl && (
                    <>
                      <span style={{ margin: "0 8px" }}>Demo:</span>
                      <a href={project.liveUrl}>Live Preview</a>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCertifications = () => {
    if (!contextData.certificationsData) return null;
    
    const validCerts = contextData.certificationsData.filter(cert => cert?.name);
    if (validCerts.length === 0) return null;

    return (
      <div className="cv-section">
        <h2 className="cv-section-title">CERTIFICATIONS</h2>
        <div className="cv-section-content">
          {validCerts.map((cert, index) => (
            <div key={index} className="cv-cert-item">
              <div className="cv-cert-header">
                <strong>{cert.name}</strong>
                {cert.issueDate && <span>{formatDate(cert.issueDate)}</span>}
              </div>
              {cert.organization && (
                <div className="cv-cert-org">{cert.organization}</div>
              )}
              {cert.url && (
                <div className="cv-cert-links">
                  <a href={cert.url}>View Certificate</a>
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
      <div className="cv-section">
        <h2 className="cv-section-title">EDUCATION</h2>
        <div className="cv-section-content">
          {validEducation.map((edu, index) => (
            <div key={index} className="cv-item">
              <div className="cv-item-header">
                <span className="cv-item-title">
                  {edu.university || "University Name"}
                </span>
                <span className="cv-item-date">
                  {formatDate(edu.enddate || edu.month)}
                </span>
              </div>

              <div className="cv-item-subtitle">
                <span>{edu.degree || "Degree"}</span>
                <span className="cv-item-location">{edu.location || ""}</span>
              </div>

              {edu.description && (
                <ul className="cv-item-description">
                  {formatJobDescription(edu.description).map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderExperience = () => {
    const expArray = Array.isArray(contextData.experience) ? contextData.experience : [contextData.experience];
    const validExperience = expArray.filter(exp => exp && (exp.company_name || exp.job_title));
    
    if (validExperience.length === 0) return null;

    return (
      <div className="cv-section">
        <h2 className="cv-section-title">EXPERIENCE</h2>
        <div className="cv-section-content">
          {validExperience.map((exp, index) => (
            <div key={index} className="cv-item">
              <div className="cv-item-header">
                <span className="cv-item-title">
                  {exp.company_name || "Company Name"}
                </span>
                <span className="cv-item-date">
                  {formatDate(exp.start_date)} - {exp.end_date ? formatDate(exp.end_date) : "Present"}
                </span>
              </div>

              <div className="cv-item-subtitle">
                <span>{exp.job_title || "Job Title"}</span>
                <span className="cv-item-location">{exp.location || ""}</span>
              </div>

              {exp.job_description && (
                <ul className="cv-item-description">
                  {formatJobDescription(exp.job_description).map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderSummary = () => {
    if (!contextData.profileData?.summary) return null;

    return (
      <div className="cv-section">
        <h2 className="cv-section-title">SUMMARY</h2>
        <div className="cv-section-content">
          <p>{contextData.profileData.summary}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="cv-preview-container">
      {/* Header Controls */}
      <div className="cv-preview-header">
        <div className="cv-preview-title">
          <h1>Resume Preview</h1>
          <p>Review your resume before downloading</p>
        </div>
        <div className="cv-preview-actions">
          <Button 
            onClick={handlePrint} 
            variant="outline" 
            className="flex items-center gap-2 text-sm py-2 px-4 border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
          >
            <Printer className="w-4 h-4" />
            Print
          </Button>
          <Button 
            onClick={handleDownload} 
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white text-sm py-2 px-4 rounded-md shadow-sm transition-colors"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* CV Preview Container */}
      <div className="cv-preview-paper">
        <div className="cv-content">
          {/* Header Section */}
          {renderHeader()}

          {/* Horizontal Line */}
          <hr className="cv-divider" />

          {/* Sections */}
          {renderSummary()}
          {renderSkills()}
          {renderProjects()}
          {renderExperience()}
          {renderEducation()}
          {renderCertifications()}
        </div>
      </div>

      {/* Footer */}
      <div className="cv-preview-footer">
        <p>This resume was generated using CV Generator</p>
      </div>
    </div>
  );
};

export default Preview;