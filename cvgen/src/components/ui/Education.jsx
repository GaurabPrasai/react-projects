import { useContext } from "react";
import { Button } from "./button";
import { Plus } from "lucide-react";
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
    <div className="p-10">
      {/* First Education Entry */}
      <div className="mb-8">
        {/* Education Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-gray-800">Degree 1</h3>
          <button className="text-red-500 hover:text-red-700 text-sm font-medium">
            Remove
          </button>
        </div>

        {/* College Name and Degree Name */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
              COLLEGE NAME
            </label>
            <input
              value={eduData.university || ""}
              onChange={handleInputChange("university")}
              type="text"
              name="university"
              placeholder="Harvard University"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
              DEGREE NAME
            </label>
            <input
              value={eduData.degree || ""}
              onChange={handleInputChange("degree")}
              type="text"
              name="degree"
              placeholder="Master of Computer Science"
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
              value={eduData.month || ""}
              onChange={handleInputChange("month")}
              type="month"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
              END DATE
            </label>
            <input
              value={eduData.enddate || ""}
              onChange={handleInputChange("enddate")}
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
            value={eduData.location || ""}
            onChange={handleInputChange("location")}
            name="location"
            type="text"
            placeholder="Cambridge, MA, USA"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Add Another Education Button */}
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

export default Education;
