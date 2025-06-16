import { useContext } from "react";
import { Button } from "./button";
import { Download, Printer } from "lucide-react";
import cvContext from "../../context/CvContext.js";

const Preview = () => {
  const { profileData, eduData, links, experience, skills, certifications } =
    useContext(cvContext);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // This would typically generate and download a PDF
    alert("Download functionality would be implemented here");
  };

  // Function to convert job description text to bullet points
  const formatJobDescription = (text) => {
    if (!text) return [];

    // Split by periods, semicolons, or line breaks and filter out empty strings
    const points = text
      .split(/[.;]\s*|\n/)
      .map((point) => point.trim())
      .filter((point) => point.length > 0);

    return points;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header Controls */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
            Resume Preview
          </h1>
          <p className="text-sm text-gray-500">
            Review your resume before downloading
          </p>
        </div>
        <div className="flex gap-3">
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
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
        <div
          className="cv-content p-16"
          style={{
            fontFamily: 'Times, "Times New Roman", serif',
            fontSize: "11pt",
            lineHeight: "1.4",
            color: "#000",
          }}
        >
          {/* Header Section */}
          <div className="text-center mb-4">
            <h1
              style={{
                fontSize: "20pt",
                fontWeight: "bold",
                marginBottom: "8px",
                letterSpacing: "0.5px",
              }}
            >
              {profileData.name || "John Doe"}
            </h1>

            {/* Contact Info - Single Line */}
            <div
              style={{
                fontSize: "10pt",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
                marginBottom: "4px",
              }}
            >
              <span>📧 {profileData.email || "johndoe@protonmail.com"}</span>
              <a href={links.website_url}>
                <span>🌐 {links.website_text || "johndoe.com"}</span>
              </a>
              <a href={links.linkedin_url}>
                <span>💼 {links.linkedin_text || "john-doe-123"}</span>
              </a>
              <a href={links.github_url}>
                <span>🐙 {links.github_text || "johndoe"}</span>
              </a>
            </div>
          </div>

          {/* Horizontal Line */}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #000",
              margin: "16px 0",
            }}
          />

          {/* Technical Skills */}
          <div style={{ marginBottom: "16px" }}>
            <h2
              style={{
                fontSize: "12pt",
                fontWeight: "bold",
                marginBottom: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              TECHNICAL SKILLS
            </h2>

            <div style={{ fontSize: "11pt", lineHeight: "1.3" }}>
              {skills?.technical?.languages && (
                <div style={{ marginBottom: "2px" }}>
                  <strong>Languages:</strong> {skills.technical.languages}
                </div>
              )}
              {skills?.technical?.frameworks && (
                <div style={{ marginBottom: "2px" }}>
                  <strong>Frameworks & Tools:</strong>{" "}
                  {skills.technical.frameworks}
                </div>
              )}
              {skills?.technical?.databases && (
                <div style={{ marginBottom: "2px" }}>
                  <strong>Databases:</strong> {skills.technical.databases}
                </div>
              )}
            </div>
          </div>

          {/* Projects Section */}
          <div style={{ marginBottom: "16px" }}>
            <h2
              style={{
                fontSize: "12pt",
                fontWeight: "bold",
                marginBottom: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              PROJECTS
            </h2>

            {/* Project 1 */}
            <div style={{ marginBottom: "12px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "4px",
                }}
              >
                <strong style={{ fontSize: "11pt" }}>TravelPlanner</strong>
                <span
                  style={{
                    fontSize: "10pt",
                    fontStyle: "italic",
                    color: "#333",
                  }}
                >
                  HTML, CSS, React, TypeScript, Redux, Bootstrap, Express.js,
                  PostgreSQL
                </span>
              </div>

              <ul
                style={{
                  marginLeft: "16px",
                  marginBottom: "6px",
                  fontSize: "11pt",
                }}
              >
                <li style={{ marginBottom: "1px" }}>
                  Developed a user-friendly web application for travel planning,
                  allowing users to create and manage their itineraries.
                </li>
                <li style={{ marginBottom: "1px" }}>
                  Utilized Redux for state management, enabling efficient data
                  flow and improved application performance.
                </li>
                <li style={{ marginBottom: "1px" }}>
                  Designed RESTful APIs using Node.js and Express.js,
                  facilitating data retrieval and storage from the PostgreSQL
                  database.
                </li>
                <li style={{ marginBottom: "1px" }}>
                  Implemented JWT-based authentication to ensure secure user
                  registration and login processes.
                </li>
              </ul>

              <div style={{ fontSize: "10pt", marginLeft: "0px" }}>
                <strong>Code:</strong>{" "}
                <a
                  href="#"
                  style={{ color: "#0066cc", textDecoration: "underline" }}
                >
                  Github Repo
                </a>
                <span style={{ margin: "0 8px" }}>Demo:</span>
                <a
                  href="#"
                  style={{ color: "#0066cc", textDecoration: "underline" }}
                >
                  Live Preview
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div style={{ marginBottom: "12px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "4px",
                }}
              >
                <strong style={{ fontSize: "11pt" }}>Project No. 2</strong>
                <span
                  style={{
                    fontSize: "10pt",
                    fontStyle: "italic",
                    color: "#333",
                  }}
                >
                  Example Tech Stack
                </span>
              </div>

              <ul
                style={{
                  marginLeft: "16px",
                  marginBottom: "6px",
                  fontSize: "11pt",
                }}
              >
                <li style={{ marginBottom: "1px" }}>Bullet point #1.</li>
                <li style={{ marginBottom: "1px" }}>Bullet point #2.</li>
                <li style={{ marginBottom: "1px" }}>Bullet point #3.</li>
                <li style={{ marginBottom: "1px" }}>Bullet point #4.</li>
              </ul>

              <div style={{ fontSize: "10pt", marginLeft: "0px" }}>
                <strong>Code:</strong>{" "}
                <a
                  href="#"
                  style={{ color: "#0066cc", textDecoration: "underline" }}
                >
                  Codeberg Repo
                </a>
                <span style={{ margin: "0 8px" }}>Demo:</span>
                <a
                  href="#"
                  style={{ color: "#0066cc", textDecoration: "underline" }}
                >
                  Live Preview
                </a>
              </div>
            </div>
          </div>

          {/* Soft Skills & Languages */}
          <div style={{ marginBottom: "16px" }}>
            <h2
              style={{
                fontSize: "12pt",
                fontWeight: "bold",
                marginBottom: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              SOFT SKILLS & LANGUAGES
            </h2>

            <div style={{ fontSize: "11pt", lineHeight: "1.3" }}>
              {skills?.soft?.communication && (
                <div style={{ marginBottom: "2px" }}>
                  <strong>Communication & Leadership:</strong>{" "}
                  {skills.soft.communication}
                </div>
              )}
              {skills?.soft?.problemSolving && (
                <div style={{ marginBottom: "2px" }}>
                  <strong>Problem Solving & Collaboration:</strong>{" "}
                  {skills.soft.problemSolving}
                </div>
              )}
              {skills?.languages?.spoken && (
                <div style={{ marginBottom: "2px" }}>
                  <strong>Languages:</strong> {skills.languages.spoken}
                </div>
              )}
            </div>
          </div>

          {/* Certifications */}
          {Array.isArray(certifications) && certifications.length > 0 && (
            <div style={{ marginBottom: "16px" }}>
              <h2
                style={{
                  fontSize: "12pt",
                  fontWeight: "bold",
                  marginBottom: "8px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                CERTIFICATIONS
              </h2>

              <div style={{ fontSize: "11pt", lineHeight: "1.3" }}>
                {certifications.map(
                  (cert, index) =>
                    cert.name && (
                      <div
                        key={cert.id || index}
                        style={{ marginBottom: "6px" }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <strong>{cert.name}</strong>
                          {cert.date && <span>{cert.date}</span>}
                        </div>
                        {cert.issuer && (
                          <div style={{ fontStyle: "italic" }}>
                            {cert.issuer}
                          </div>
                        )}
                        {cert.credentialId && (
                          <div style={{ fontSize: "10pt" }}>
                            <strong>Credential ID:</strong> {cert.credentialId}
                            {cert.url && (
                              <span>
                                {" "}
                                •{" "}
                                <a
                                  href={cert.url}
                                  style={{
                                    color: "#0066cc",
                                    textDecoration: "underline",
                                  }}
                                >
                                  Verify
                                </a>
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    )
                )}
              </div>
            </div>
          )}

          {/* Education Section */}
          <div style={{ marginBottom: "16px" }}>
            <h2
              style={{
                fontSize: "12pt",
                fontWeight: "bold",
                marginBottom: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              EDUCATION
            </h2>

            {/* Education 1 */}
            <div style={{ marginBottom: "12px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "2px",
                }}
              >
                <strong style={{ fontSize: "11pt" }}>
                  {eduData.university || "Pistachio Institute of Technology"}
                </strong>
                <span style={{ fontSize: "10pt", color: "#333" }}>
                  August 2013
                </span>
              </div>

              <div
                style={{
                  fontSize: "11pt",
                  fontStyle: "italic",
                  marginBottom: "4px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>MS, Computer Science</span>
                <span style={{ color: "#333" }}>Goodwell, Motherland</span>
              </div>

              <ul
                style={{
                  marginLeft: "16px",
                  fontSize: "11pt",
                }}
              >
                <li style={{ marginBottom: "1px" }}>
                  Developed a user-friendly web application for travel planning,
                  allowing users to create and manage their itineraries.
                </li>
                <li style={{ marginBottom: "1px" }}>
                  Utilized Redux for state management, enabling efficient data
                  flow and improved application performance.
                </li>
                <li style={{ marginBottom: "1px" }}>
                  Designed RESTful APIs using Node.js and Express.js,
                  facilitating data retrieval and storage from the PostgreSQL
                  database.
                </li>
                <li style={{ marginBottom: "1px" }}>
                  Implemented JWT-based authentication to ensure secure user
                  registration and login processes.
                </li>
              </ul>
            </div>

            {/* Education 2 */}
            <div style={{ marginBottom: "12px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "2px",
                }}
              >
                <strong style={{ fontSize: "11pt" }}>XYZ University</strong>
                <span style={{ fontSize: "10pt", color: "#333" }}>
                  August 2011
                </span>
              </div>

              <div
                style={{
                  fontSize: "11pt",
                  fontStyle: "italic",
                  marginBottom: "4px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>BS, Computer Science</span>
                <span style={{ color: "#333" }}>City, Country</span>
              </div>

              <ul
                style={{
                  marginLeft: "16px",
                  fontSize: "11pt",
                }}
              >
                <li style={{ marginBottom: "1px" }}>Bullet point #1.</li>
                <li style={{ marginBottom: "1px" }}>Bullet point #2.</li>
                <li style={{ marginBottom: "1px" }}>Bullet point #3.</li>
              </ul>
            </div>
          </div>

          {/* Experience Section */}
          <div style={{ marginBottom: "16px" }}>
            <h2
              style={{
                fontSize: "12pt",
                fontWeight: "bold",
                marginBottom: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              EXPERIENCE
            </h2>

            {/* Experience 1 */}
            <div style={{ marginBottom: "12px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "2px",
                }}
              >
                <strong style={{ fontSize: "11pt" }}>
                  {experience?.company_name || "Tech Company Inc."}
                </strong>
                <span style={{ fontSize: "10pt", color: "#333" }}>
                  {experience?.start_date || "Jan 2022"} -{" "}
                  {experience?.end_date || "Present"}
                </span>
              </div>

              <div
                style={{
                  fontSize: "11pt",
                  fontStyle: "italic",
                  marginBottom: "4px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>{experience?.job_title || "Software Developer"}</span>
                <span style={{ color: "#333" }}>
                  {experience?.location || "City, Country"}
                </span>
              </div>

              <ul
                style={{
                  marginLeft: "16px",
                  fontSize: "11pt",
                }}
              >
                {experience?.job_description ? (
                  formatJobDescription(experience.job_description).map(
                    (point, index) => (
                      <li key={index} style={{ marginBottom: "1px" }}>
                        {point}
                      </li>
                    )
                  )
                ) : (
                  <>
                    <li style={{ marginBottom: "1px" }}>
                      Collaborated with cross-functional teams to deliver
                      high-quality software solutions
                    </li>
                    <li style={{ marginBottom: "1px" }}>
                      Improved application performance by 30% through code
                      optimization
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
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
