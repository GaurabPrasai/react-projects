import { useContext } from "react";
import { Button } from "./button";
import { Download, Printer } from "lucide-react";
import cvContext from "../../context/cvcontext";

const Preview = () => {
  const { profileData, eduData } = useContext(cvContext);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // This would typically generate and download a PDF
    alert("Download functionality would be implemented here");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header Controls */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Resume Preview</h1>
          <p className="text-gray-600">Review your resume before downloading</p>
        </div>
        <div className="flex gap-3">
          <Button
            onClick={handlePrint}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
            Print
          </Button>
          <Button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* CV Preview Container */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="cv-content p-12" style={{ fontFamily: 'Georgia, serif' }}>
          {/* Header Section */}
          <div className="text-center mb-8 border-b-2 border-gray-200 pb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {profileData.name || "Your Name"}
            </h1>
            <div className="flex justify-center items-center gap-6 text-sm text-gray-600 flex-wrap">
              {profileData.email && (
                <span className="flex items-center gap-1">
                  📧 {profileData.email}
                </span>
              )}
              {profileData.phone && (
                <span className="flex items-center gap-1">
                  📞 {profileData.phone}
                </span>
              )}
              {profileData.address && (
                <span className="flex items-center gap-1">
                  📍 {profileData.address}
                </span>
              )}
            </div>
          </div>

          {/* Professional Summary */}
          {profileData.summary && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                {profileData.summary}
              </p>
            </div>
          )}

          {/* Technical Skills */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-gray-800">Languages: </span>
                <span className="text-gray-700">JavaScript, Go, HTML, CSS</span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Frameworks, Libraries & Databases: </span>
                <span className="text-gray-700">React, Redux, NestJS, PostgreSQL, CockroachDB</span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Tools & Other Technologies: </span>
                <span className="text-gray-700">Git, SVN, AWS, Postman</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-1">
              PROJECTS
            </h2>
            
            {/* Project 1 */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">TravelPlanner</h3>
                <span className="text-gray-600 text-sm">HTML, CSS, React, TypeScript, Redux, Bootstrap, Express.js, PostgreSQL</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Developed a user-friendly web application for travel planning, allowing users to create and manage their itineraries.</li>
                <li>Utilized Redux for state management, enabling efficient data flow and improved application performance.</li>
                <li>Designed RESTful APIs using Node.js and Express.js, facilitating data retrieval and storage from the PostgreSQL database.</li>
                <li>Implemented JWT-based authentication to ensure secure user registration and login processes.</li>
              </ul>
              <div className="mt-2 text-sm">
                <span className="font-semibold">Code: </span>
                <a href="#" className="text-blue-600 underline">Github Repo</a>
                <span className="mx-2">|</span>
                <span className="font-semibold">Demo: </span>
                <a href="#" className="text-blue-600 underline">Live Preview</a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">Project No. 2</h3>
                <span className="text-gray-600 text-sm">Example Tech Stack</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Bullet point #1.</li>
                <li>Bullet point #2.</li>
                <li>Bullet point #3.</li>
                <li>Bullet point #4.</li>
              </ul>
              <div className="mt-2 text-sm">
                <span className="font-semibold">Code: </span>
                <a href="#" className="text-blue-600 underline">Codeberg Repo</a>
                <span className="mx-2">|</span>
                <span className="font-semibold">Demo: </span>
                <a href="#" className="text-blue-600 underline">Live Preview</a>
              </div>
            </div>
          </div>

          {/* Certificates, Skills & Interests */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-1">
              CERTIFICATES, SKILLS & INTERESTS
            </h2>
            <div className="space-y-2">
              <div>
                <span className="font-semibold text-gray-800">Certificates: </span>
                <span className="text-gray-700">cs50x00</span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Skills: </span>
                <span className="text-gray-700">Strategic Planning, Problem Solving, Leadership, Teamwork, etc</span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Interests: </span>
                <span className="text-gray-700">Reading, sleeping, yoga, fishing, traveling, Reddit, Bear, Football</span>
              </div>
            </div>
          </div>

          {/* Education */}
          {(eduData.university || eduData.degree) && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-1">
                EDUCATION
              </h2>
              <div className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-gray-900">
                    {eduData.university || "University Name"}
                  </h3>
                  <span className="text-gray-600 text-sm">
                    {eduData.month && new Date(eduData.month).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long' 
                    })}
                    {eduData.month && eduData.enddate && " - "}
                    {eduData.enddate && new Date(eduData.enddate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long' 
                    })}
                  </span>
                </div>
                <div className="text-gray-700">
                  <span className="italic">{eduData.degree || "Degree Name"}</span>
                  {eduData.location && (
                    <span className="ml-4 text-gray-600">{eduData.location}</span>
                  )}
                </div>
                {/* Sample education details */}
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mt-2">
                  <li>Developed a user-friendly web application for travel planning, allowing users to create and manage their itineraries.</li>
                  <li>Utilized Redux for state management, enabling efficient data flow and improved application performance.</li>
                  <li>Designed RESTful APIs using Node.js and Express.js, facilitating data retrieval and storage from the PostgreSQL database.</li>
                  <li>Implemented JWT-based authentication to ensure secure user registration and login processes.</li>
                </ul>
              </div>

              {/* Second Education Entry */}
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-gray-900">XYZ University</h3>
                  <span className="text-gray-600 text-sm">August 2011</span>
                </div>
                <div className="text-gray-700">
                  <span className="italic">BS, Computer Science</span>
                  <span className="ml-4 text-gray-600">City, Country</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mt-2">
                  <li>Bullet point #1.</li>
                  <li>Bullet point #2.</li>
                  <li>Bullet point #3.</li>
                </ul>
              </div>
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