import { useContext } from "react";
import { Button } from "./button";
import { Plus, GraduationCap, Calendar, MapPin, School, BookOpen } from "lucide-react";
import cvContext from "../../context/CvContext.js";

const Education = () => {
  const { eduData, setEduData } = useContext(cvContext);

  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    const updateData = {
      ...eduData,
      [field]: value,
    };
    setEduData(updateData);
  };

  return (
    <div className="px-8 py-12 max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-3">
          <GraduationCap className="w-5 h-5 text-blue-600" />
        </div>
        <h2 className="text-xl font-medium text-gray-800 mb-1">
          Education
        </h2>
        <p className="text-gray-500 text-sm">
          Add your educational background and qualifications
        </p>
      </div>

      {/* Form Container with subtle background */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 p-8">
        {/* Education Entry */}
        <div className="mb-8">
          {/* Education Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-800">Degree 1</h3>
            <button className="text-red-500 hover:text-red-600 text-sm font-medium transition-colors duration-200">
              Remove
            </button>
          </div>

          {/* First Row: College Name and Degree Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                <School className="w-4 h-4 mr-2 text-gray-500" />
                College Name
              </label>
              <input
                value={eduData.university || ""}
                onChange={handleInputChange("university")}
                type="text"
                name="university"
                placeholder="Harvard University"
                className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                <BookOpen className="w-4 h-4 mr-2 text-gray-500" />
                Degree Name
              </label>
              <input
                value={eduData.degree || ""}
                onChange={handleInputChange("degree")}
                type="text"
                name="degree"
                placeholder="Master of Computer Science"
                className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
              />
            </div>
          </div>

          {/* Second Row: Start Date and End Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                Start Date
              </label>
              <input
                value={eduData.month || ""}
                onChange={handleInputChange("month")}
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
                value={eduData.enddate || ""}
                onChange={handleInputChange("enddate")}
                type="month"
                className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
              />
            </div>
          </div>

          {/* Third Row: Location (full width) */}
          <div className="mb-8">
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                Location
              </label>
              <input
                value={eduData.location || ""}
                onChange={handleInputChange("location")}
                name="location"
                type="text"
                placeholder="Cambridge, MA, USA"
                className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
              />
            </div>
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

export default Education;