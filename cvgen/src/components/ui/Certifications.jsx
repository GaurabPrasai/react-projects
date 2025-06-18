import { useContext } from "react";
import { Button } from "./button";
import { Plus, Award, Link } from "lucide-react";
import cvContext from "../../context/CvContext.js";

const Certifications = () => {
  const { certificationsData, setCertificationsData } = useContext(cvContext);

  const handleInputChange = (index, field) => (e) => {
    const value = e.target.value;
    
    // Create a new array with proper cloning, handle undefined case
    const currentData = certificationsData || [];
    const updatedCertifications = currentData.length > 0 
      ? currentData.map(cert => ({ ...cert })) 
      : [];
    
    // Ensure we have enough slots
    while (updatedCertifications.length <= index) {
      updatedCertifications.push({});
    }
    
    // Update the specific field
    updatedCertifications[index] = {
      ...updatedCertifications[index],
      [field]: value
    };
    
    setCertificationsData(updatedCertifications);
  };

  const addMoreCertification = () => {
    const currentData = certificationsData || [];
    const updatedCertifications = [...currentData, {}];
    setCertificationsData(updatedCertifications);
  };

  // Initialize with 4 empty certification objects if array is empty or undefined
  const certifications = (certificationsData && certificationsData.length > 0) 
    ? certificationsData 
    : Array.from({ length: 4 }, () => ({}));

  return (
    <div className="px-8 py-12 max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-3">
          <Award className="w-5 h-5 text-blue-600" />
        </div>
        <h2 className="text-xl font-medium text-gray-800 mb-1">
          Certifications
        </h2>
        <p className="text-gray-500 text-sm">
          Add your professional certifications and credentials
        </p>
      </div>

      {/* Form Container with subtle background */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 p-8">
        {certifications.map((cert, index) => (
          <div key={index} className="mb-8 last:mb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Certification Name */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                  <Award className="w-4 h-4 mr-2 text-gray-500" />
                  Certification Name
                </label>
                <input
                  value={cert.name || ""}
                  onChange={handleInputChange(index, "name")}
                  type="text"
                  placeholder="AWS Certified Solutions Architect"
                  className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
                />
              </div>

              {/* Issuing Organization */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                  <Award className="w-4 h-4 mr-2 text-gray-500" />
                  Issuing Organization
                </label>
                <input
                  value={cert.organization || ""}
                  onChange={handleInputChange(index, "organization")}
                  type="text"
                  placeholder="Amazon Web Services"
                  className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              {/* Issue Date */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                  <Award className="w-4 h-4 mr-2 text-gray-500" />
                  Issue Date
                </label>
                <input
                  value={cert.issueDate || ""}
                  onChange={handleInputChange(index, "issueDate")}
                  type="month"
                  className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
                />
              </div>

              {/* Expiry Date */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                  <Award className="w-4 h-4 mr-2 text-gray-500" />
                  Expiry Date (Optional)
                </label>
                <input
                  value={cert.expiryDate || ""}
                  onChange={handleInputChange(index, "expiryDate")}
                  type="month"
                  className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
                />
              </div>
            </div>

            {/* Certification URL */}
            <div className="mt-6">
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                  <Link className="w-4 h-4 mr-2 text-gray-500" />
                  Certification URL (Optional)
                </label>
                <input
                  value={cert.url || ""}
                  onChange={handleInputChange(index, "url")}
                  type="url"
                  placeholder="https://www.credly.com/badges/your-certification-link"
                  className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
                />
              </div>
            </div>

            {/* Divider between certifications */}
            {index < certifications.length - 1 && (
              <div className="mt-8 pt-8 border-t border-gray-100"></div>
            )}
          </div>
        ))}

        {/* Add More Button */}
        <div className="mt-8">
          <Button
            onClick={addMoreCertification}
            variant="outline"
            className="w-full h-12 text-sm border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 rounded-xl font-medium text-gray-600 hover:text-blue-600 group"
          >
            <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
            Add More Certification
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Certifications;