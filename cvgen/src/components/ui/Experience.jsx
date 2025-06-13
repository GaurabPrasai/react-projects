import { Button } from "./button";
import { Plus, Briefcase, Building2, Calendar, MapPin, FileText, Users } from "lucide-react";
import { useContext } from "react";
import cvContext from "../../context/CvContext.js";

const Experience = () => {
  const { experience, setExperience } = useContext(cvContext);

  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
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
          Showcase your professional journey and achievements
        </p>
      </div>

      {/* Form Container with subtle background */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 p-8">
        {/* Experience Entry */}
        <div className="mb-8">
          {/* Experience Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-800">Experience 1</h3>
            <button className="text-red-500 hover:text-red-600 text-sm font-medium transition-colors duration-200">
              Remove
            </button>
          </div>

          {/* First Row: Job Title and Company Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                <Briefcase className="w-4 h-4 mr-2 text-gray-500" />
                Job Title
              </label>
              <input
                value={experience.job_title || ""}
                onChange={handleInputChange("job_title")}
                name="job_title"
                type="text"
                placeholder="Senior Software Engineer"
                className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                <Building2 className="w-4 h-4 mr-2 text-gray-500" />
                Company Name
              </label>
              <input
                value={experience.company_name || ""}
                onChange={handleInputChange("company_name")}
                name="company_name"
                type="text"
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
                <Users className="w-4 h-4 mr-2 text-gray-500" />
                Department
              </label>
              <input
                value={experience.dpt || ""}
                onChange={handleInputChange("dpt")}
                name="dpt"
                type="text"
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
                name="start_date"
                type="month"
                className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
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
                name="end_date"
                type="month"
                className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
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
                name="location"
                type="text"
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
                Job Description
              </label>
              <textarea
                rows={5}
                placeholder="Describe your role, responsibilities, and key achievements..."
                className="w-full px-4 py-3 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 resize-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300 leading-relaxed"
              />
            </div>
          </div>

          {/* Currently Working Here Checkbox */}
          <div className="flex items-center mb-8">
            <input
              value={experience.checkbox || ""}
              onChange={handleInputChange("checkbox")}
              name="checkbox"
              type="checkbox"
              id="currently-working"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-colors duration-200"
            />
            <label
              htmlFor="currently-working"
              className="ml-3 text-sm text-gray-700 cursor-pointer"
            >
              I currently work here
            </label>
          </div>
        </div>

        {/* Add More Button */}
        <div className="mt-8">
          <Button
            variant="outline"
            className="w-full h-12 text-sm border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 rounded-xl font-medium text-gray-600 hover:text-blue-600 group"
          >
            <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
            Add More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Experience;