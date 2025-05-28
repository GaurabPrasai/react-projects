import "/src/App.css"

const Preview = () => {
  return (
    <>
      <div className="full-preview-page" id="fullPreviewPage">
        <div className="full-preview-container"></div>
        <div className="full-preview-sidebar card">
          <button className="back-btn">
            <i className="fas fa-arrow-left"></i>
            Back to Editor
          </button>

          <div className="template-selector">
            <div className="section-title">Template Options</div>
            <div className="template-grid">
              <div className="template-card active">
                <span>Modern</span>
              </div>
              <div className="template-card">
                <span>classNameic</span>
              </div>
              <div className="template-card">
                <span>Creative</span>
              </div>
              <div className="template-card">
                <span>Minimal</span>
              </div>
            </div>
          </div>

          <div className="download-section">
            <button className="download-btn">
              <i className="fas fa-download"></i>
              Download PDF
            </button>
          </div>
        </div>

        <div className="full-preview-main card">
          <div className="cv-preview">
            <div className="cv-header">
              <h1 className="cv-name" id="fullPreviewName">
                Alexandra Chen
              </h1>
              <div className="cv-profession" id="fullPreviewProfession">
                Senior UX Designer
              </div>
              <div className="cv-contact">
                <div id="fullPreviewEmail">alexandra.chen@gmail.com</div>
                <div>
                  Phone: <span id="fullPreviewPhone">+1 (555) 987-6543</span>
                </div>
                <div>
                  LinkedIn:{" "}
                  <span id="fullPreviewLinkedin">
                    https://linkedin.com/in/alexandra-chen
                  </span>
                </div>
              </div>
            </div>

            <div className="cv-section">
              <h3 className="cv-section-title">Professional Summary</h3>
              <div className="cv-section-content" id="fullPreviewSummary">
                Creative and detail-oriented UX Designer with 6+ years of
                experience crafting user-centered digital experiences.
                Passionate about solving complex problems through innovative
                design solutions.
              </div>
            </div>

            <div className="cv-section">
              <h3 className="cv-section-title">Experience</h3>
              <div className="cv-section-content">
                <strong>Senior UX Designer</strong> - Tech Innovations Inc.
                (2021 - Present) • Lead design for flagship mobile application
                with 2M+ users • Collaborate with cross-functional teams to
                deliver user-centered solutions • Conduct user research and
                usability testing to inform design decisions
              </div>
            </div>

            <div className="cv-section">
              <h3 className="cv-section-title">Education</h3>
              <div className="cv-section-content">
                <strong>Bachelor of Fine Arts in Digital Design</strong>
                University of Design & Arts (2014-2018)
              </div>
            </div>

            <div className="cv-section">
              <h3 className="cv-section-title">Skills</h3>
              <div className="cv-section-content">
                User Experience Design • User Interface Design • Prototyping •
                User Research • Figma • Adobe Creative Suite • HTML/CSS • Design
                Systems
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Preview;
