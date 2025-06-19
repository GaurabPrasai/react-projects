import { useContext } from "react";
import { Button } from "./button";
import { Plus, Briefcase, Building, Calendar, MapPin, FileText, Trash2 } from "lucide-react";
import cvContext from "../../context/CvContext.js";

const Experience = () => {
  const { experience, setExperience } = useContext(cvContext);

  const handleInputChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const updateData = {
      ...experience,
      [field]: value,
    };
    setExperience(updateData);
  };

  return (
    <div className="px-8 py-12 max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-3">
          <Briefcase className="w-5 h-5 text-blue-600" />
        </div>
        <h2 className="text-xl font-medium text-gray-800 mb-1">
          Work Experience
        </h2>
        <p className="text-gray-500 text-sm">
          Share your professional journey and achievements
        </p>
      </div>

      {/* Form Container with subtle background */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 p-8">
        {/* Experience Entry Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <h3 className="text-lg font-medium text-gray-800">Experience 1</h3>
          </div>
          <button className="inline-flex items-center text-red-500 hover:text-red-700 text-sm font-medium transition-colors duration-200">
            <Trash2 className="w-4 h-4 mr-1" />
            Remove
          </button>
        </div>

        {/* First Row: Job Title and Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
              <Briefcase className="w-4 h-4 mr-2 text-gray-500" />
              Job Title
            </label>
            <input
              value={experience.job_title || ""}
              onChange={handleInputChange("job_title")}
              type="text"
              name="job_title"
              placeholder="Senior Software Engineer"
              className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
            />
          </div>
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
              <Building className="w-4 h-4 mr-2 text-gray-500" />
              Company Name
            </label>
            <input
              value={experience.company_name || ""}
              onChange={handleInputChange("company_name")}
              type="text"
              name="company_name"
              placeholder="Google Inc."
              className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
            />
          </div>
        </div>

        {/* Second Row: Employment Type and Department */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
              <FileText className="w-4 h-4 mr-2 text-gray-500" />
              Employment Type
            </label>
            <select className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300">
              <option value="">Select employment type</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="freelance">Freelance</option>
              <option value="internship">Internship</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
              <Building className="w-4 h-4 mr-2 text-gray-500" />
              Department
            </label>
            <input
              value={experience.dpt || ""}
              onChange={handleInputChange("dpt")}
              type="text"
              name="dpt"
              placeholder="Engineering"
              className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
            />
          </div>
        </div>

        {/* Third Row: Start Date and End Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
              <Calendar className="w-4 h-4 mr-2 text-gray-500" />
              Start Date
            </label>
            <input
              value={experience.start_date || ""}
              onChange={handleInputChange("start_date")}
              type="month"
              name="start_date"
              className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
            />
          </div>
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
              <Calendar className="w-4 h-4 mr-2 text-gray-500" />
              End Date
            </label>
            <input
              value={experience.end_date || ""}
              onChange={handleInputChange("end_date")}
              type="month"
              name="end_date"
              disabled={experience.checkbox}
              className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300 disabled:bg-gray-50 disabled:text-gray-400"
            />
          </div>
        </div>

        {/* Fourth Row: Location (full width) */}
        <div className="mb-8">
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
              <MapPin className="w-4 h-4 mr-2 text-gray-500" />
              Location
            </label>
            <input
              value={experience.location || ""}
              onChange={handleInputChange("location")}
              type="text"
              name="location"
              placeholder="Mountain View, CA, USA"
              className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
            />
          </div>
        </div>

        {/* Fifth Row: Job Description (full width) */}
        <div className="mb-8">
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
              <FileText className="w-4 h-4 mr-2 text-gray-500" />
              Job Description (make sure to write the job description in complete sentences and end each with a full stop for better formatting)
            </label>
            <textarea
              value={experience.job_description || ""}
              onChange={handleInputChange("job_description")}
              name="job_description"
              rows={5}
              placeholder="Describe your role, responsibilities, and key achievements. Include specific projects, technologies used, and measurable results..."
              className="w-full px-4 py-3 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 resize-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300 leading-relaxed"
            />
          </div>
        </div>

        {/* Currently Working Checkbox */}
        <div className="mb-8">
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                value={experience.checkbox || ""}
                onChange={handleInputChange("checkbox")}
                type="checkbox"
                name="checkbox"
                className="sr-only"
              />
              <div className="w-5 h-5 border-2 border-gray-300 rounded transition-all duration-200 hover:border-blue-400 flex items-center justify-center bg-white">
                {experience.checkbox && (
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>
            <span className="ml-3 text-sm font-medium text-gray-700">
              I currently work here
            </span>
          </label>
        </div>

        {/* Add More Button */}
        <div className="mt-8">
          <Button
            variant="outline"
            className="w-full h-12 text-sm border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 rounded-xl font-medium text-gray-600 hover:text-blue-600 group"
          >
            <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
            Add Another Experience
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Experience;