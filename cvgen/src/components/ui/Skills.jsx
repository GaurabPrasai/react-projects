import { useContext } from "react";
import { Button } from "./button";
import { Plus, Code, Users, Globe, Lightbulb } from "lucide-react";
import cvContext from "../../context/CvContext.js";

const Skills = () => {
  const { skillsData, setSkillsData } = useContext(cvContext);

  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    const updateData = {
      ...skillsData,
      [field]: value,
    };
    setSkillsData(updateData);
  };

  return (
    <div className="px-8 py-12 max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-3">
          <Lightbulb className="w-5 h-5 text-blue-600" />
        </div>
        <h2 className="text-xl font-medium text-gray-800 mb-1">
          Skills & Expertise
        </h2>
        <p className="text-gray-500 text-sm">
          Showcase your technical and professional skills
        </p>
      </div>

      {/* Form Container with subtle background */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 p-8">
        
        {/* Technical Skills Section */}
        <div className="mb-10">
          <div className="flex items-center mb-6">
            <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-50 rounded-lg mr-3">
              <Code className="w-4 h-4 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-800">Technical Skills</h3>
          </div>

          {/* Programming Languages */}
          <div className="mb-8">
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                <Code className="w-4 h-4 mr-2 text-gray-500" />
                Programming Languages
              </label>
              <textarea
                value={skillsData?.programmingLanguages || ""}
                onChange={handleInputChange("programmingLanguages")}
                rows={3}
                placeholder="JavaScript, Python, Java, C++, TypeScript, Go, Rust..."
                className="w-full px-4 py-3 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 resize-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300 leading-relaxed"
              />
            </div>
          </div>

          {/* Frameworks & Tools */}
          <div className="mb-8">
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                <Code className="w-4 h-4 mr-2 text-gray-500" />
                Frameworks & Tools
              </label>
              <textarea
                value={skillsData?.frameworksTools || ""}
                onChange={handleInputChange("frameworksTools")}
                rows={3}
                placeholder="React, Node.js, Express, Docker, Git, AWS, Kubernetes, Jenkins..."
                className="w-full px-4 py-3 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 resize-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300 leading-relaxed"
              />
            </div>
          </div>

          {/* Databases */}
          <div className="mb-8">
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                <Code className="w-4 h-4 mr-2 text-gray-500" />
                Databases & Storage
              </label>
              <textarea
                value={skillsData?.databases || ""}
                onChange={handleInputChange("databases")}
                rows={2}
                placeholder="MySQL, PostgreSQL, MongoDB, Redis, Elasticsearch, Firebase..."
                className="w-full px-4 py-3 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 resize-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300 leading-relaxed"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-10"></div>

        {/* Soft Skills Section */}
        <div className="mb-10">
          <div className="flex items-center mb-6">
            <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-50 rounded-lg mr-3">
              <Users className="w-4 h-4 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-800">Professional Skills</h3>
          </div>

          {/* Communication & Leadership */}
          <div className="mb-8">
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                <Users className="w-4 h-4 mr-2 text-gray-500" />
                Communication & Leadership
              </label>
              <textarea
                value={skillsData?.communicationLeadership || ""}
                onChange={handleInputChange("communicationLeadership")}
                rows={3}
                placeholder="Public Speaking, Team Management, Technical Writing, Presentation Skills, Mentoring..."
                className="w-full px-4 py-3 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 resize-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300 leading-relaxed"
              />
            </div>
          </div>

          {/* Problem Solving & Collaboration */}
          <div className="mb-8">
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                <Users className="w-4 h-4 mr-2 text-gray-500" />
                Problem Solving & Collaboration
              </label>
              <textarea
                value={skillsData?.problemSolvingCollaboration || ""}
                onChange={handleInputChange("problemSolvingCollaboration")}
                rows={3}
                placeholder="Critical Thinking, Teamwork, Analytical Skills, Conflict Resolution, Project Management..."
                className="w-full px-4 py-3 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 resize-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300 leading-relaxed"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-10"></div>

        {/* Languages Section */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-50 rounded-lg mr-3">
              <Globe className="w-4 h-4 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-800">Languages</h3>
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
              <Globe className="w-4 h-4 mr-2 text-gray-500" />
              Languages Spoken
            </label>
            <textarea
              value={skillsData?.languages || ""}
              onChange={handleInputChange("languages")}
              rows={2}
              placeholder="English (Native), Spanish (Fluent), French (Conversational), Mandarin (Basic)..."
              className="w-full px-4 py-3 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 resize-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300 leading-relaxed"
            />
          </div>
        </div>

        {/* Add More Button */}
        <div className="mt-8">
          <Button
            variant="outline"
            className="w-full h-12 text-sm border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 rounded-xl font-medium text-gray-600 hover:text-blue-600 group"
          >
            <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
            Add Custom Skill Section
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Skills;