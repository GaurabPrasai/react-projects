import { Button } from "./button";
import { Plus } from "lucide-react";

const Experience = () => {
  return (
    <div className="p-10">
      {/* First Experience Entry */}
      <div className="mb-8">
        {/* Experience Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-gray-800">
            Experience 1
          </h3>
          <button className="text-red-500 hover:text-red-700 text-sm font-medium">
            Remove
          </button>
        </div>

        {/* Job Title and Company Name */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
              JOB TITLE
            </label>
            <input
              type="text"
              placeholder="Senior Software Engineer"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
              COMPANY NAME
            </label>
            <input
              type="text"
              placeholder="Google Inc."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Employment Type and Department */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
              EMPLOYMENT TYPE
            </label>
            <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Select employment type</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="freelance">Freelance</option>
              <option value="internship">Internship</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
              DEPARTMENT
            </label>
            <input
              type="text"
              placeholder="Engineering"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Start Date and End Date */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
              START DATE
            </label>
            <input
              type="month"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
              END DATE
            </label>
            <input
              type="month"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Location */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            LOCATION
          </label>
          <input
            type="text"
            placeholder="Mountain View, CA, USA"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Job Description */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            JOB DESCRIPTION
          </label>
          <textarea
            rows={4}
            placeholder="Describe your role, responsibilities, and key achievements..."
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Currently Working Here Checkbox */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="currently-working"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="currently-working" className="ml-2 text-sm text-gray-700">
            I currently work here
          </label>
        </div>
      </div>

      {/* Add Another Experience Button */}
      <div className="mt-6">
        <Button
          variant="outline"
          className="w-full h-12 border-2 border-dashed border-muted-foreground/30 hover:border-primary hover:bg-primary/5 transition-all duration-200"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add More
        </Button>
      </div>
    </div>
  );
};

export default Experience;