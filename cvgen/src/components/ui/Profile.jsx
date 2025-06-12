import { useContext } from "react";
import { Button } from "./button";
import { Plus } from "lucide-react";
import cvContext from "../../context/cvcontext";

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
    <div className="p-10">
      {/* First Row: Full Name and Profession */}
      <div className="grid grid-cols-2 gap-8 mb-6">
        <div>
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            FULL NAME
          </label>
          <input
            value={profileData.name || ""}
            onChange={handleInputChange("name")}
            type="text"
            name="fullName"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            PROFESSION
          </label>
          <input
            value={profileData.profession || ""}
            onChange={handleInputChange("profession")}
            type="text"
            name="profession"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Second Row: Email and Phone */}
      <div className="grid grid-cols-2 gap-8 mb-6">
        <div>
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            EMAIL ADDRESS
          </label>
          <input
            value={profileData.email || ""}
            onChange={handleInputChange("email")}
            type="email"
            name="email"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            PHONE NUMBER
          </label>
          <input
            value={profileData.phone || ""}
            onChange={handleInputChange("phone")}
            type="tel"
            name="phone"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Third Row: LinkedIn Profile (full width) */}
      <div className="mb-6">
        <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
          ADDRESS
        </label>
        <input
          value={profileData.address || ""}
          onChange={handleInputChange("address")}
          type="address"
          name="address"
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Fourth Row: Professional Summary (full width) */}
      <div>
        <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
          PROFESSIONAL SUMMARY
        </label>
        <textarea
          value={profileData.summary || ""}
          onChange={handleInputChange("summary")}
          name="summary"
          rows={5}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

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
}

export default Profile;
