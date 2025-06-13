import { useContext } from "react";
import { Button } from "./button";
import { Plus, User, Mail, Phone, MapPin, FileText } from "lucide-react";
import cvContext from "../../context/CvContext.js";

function Profile() {
  const { profileData, setProfileData } = useContext(cvContext);

  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    const updateData = {
      ...profileData,
      [field]: value,
    };
    setProfileData(updateData);
  };

  return (
    <div className="px-8 py-12 max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-3">
          <User className="w-5 h-5 text-blue-600" />
        </div>
        <h2 className="text-xl font-medium text-gray-800 mb-1">
          Personal Information
        </h2>
        <p className="text-gray-500 text-sm">
          Tell us about yourself to get started
        </p>
      </div>

      {/* Form Container with subtle background */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 p-8">
        {/* First Row: Full Name and Profession */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
              <User className="w-4 h-4 mr-2 text-gray-500" />
              Full Name
            </label>
            <input
              value={profileData.name || ""}
              onChange={handleInputChange("name")}
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
            />
          </div>
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
              <FileText className="w-4 h-4 mr-2 text-gray-500" />
              Profession
            </label>
            <input
              value={profileData.profession || ""}
              onChange={handleInputChange("profession")}
              type="text"
              name="profession"
              placeholder="Your job title or profession"
              className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
            />
          </div>
        </div>

        {/* Second Row: Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
              <Mail className="w-4 h-4 mr-2 text-gray-500" />
              Email Address
            </label>
            <input
              value={profileData.email || ""}
              onChange={handleInputChange("email")}
              type="email"
              name="email"
              placeholder="your.email@example.com"
              className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
            />
          </div>
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
              <Phone className="w-4 h-4 mr-2 text-gray-500" />
              Phone Number
            </label>
            <input
              value={profileData.phone || ""}
              onChange={handleInputChange("phone")}
              type="tel"
              name="phone"
              placeholder="+1 (555) 123-4567"
              className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
            />
          </div>
        </div>

        {/* Third Row: Address (full width) */}
        <div className="mb-8">
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
              <MapPin className="w-4 h-4 mr-2 text-gray-500" />
              Address
            </label>
            <input
              value={profileData.address || ""}
              onChange={handleInputChange("address")}
              type="text"
              name="address"
              placeholder="City, State, Country"
              className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
            />
          </div>
        </div>

        {/* Fourth Row: Professional Summary (full width) */}
        <div className="mb-8">
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
              <FileText className="w-4 h-4 mr-2 text-gray-500" />
              Professional Summary
            </label>
            <textarea
              value={profileData.summary || ""}
              onChange={handleInputChange("summary")}
              name="summary"
              rows={5}
              placeholder="Write a brief summary of your professional background, key skills, and career objectives..."
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
            Add Custom Section
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
