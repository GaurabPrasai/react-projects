import { useContext } from "react";
import { Button } from "./button";
import { Plus, Link, Globe, Linkedin, Github, Twitter, Briefcase, ExternalLink } from "lucide-react";
import cvContext from "../../context/CvContext.js";

const Links = () => {
  const { links, setLinks } = useContext(cvContext);

  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    const updateData = {
      ...links,
      [field]: value,
    };
    setLinks(updateData);
  };

  return (
    <div className="px-8 py-12 max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-3">
          <Link className="w-5 h-5 text-blue-600" />
        </div>
        <h2 className="text-xl font-medium text-gray-800 mb-1">
          Links & Social Media
        </h2>
        <p className="text-gray-500 text-sm">
          Share your online presence and portfolio
        </p>
      </div>

      {/* Form Container with subtle background */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 p-8">
        
        {/* Website Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <h3 className="text-lg font-medium text-gray-800">Website</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                <Globe className="w-4 h-4 mr-2 text-gray-500" />
                URL
              </label>
              <input
                value={links?.website_url || ""}
                onChange={handleInputChange("website_url")}
                type="url"
                name="website_url"
                placeholder="https://www.johndoe.com"
                className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                <ExternalLink className="w-4 h-4 mr-2 text-gray-500" />
                Display Text
              </label>
              <input
                value={links?.website_text || ""}
                onChange={handleInputChange("website_text")}
                type="text"
                name="website_text"
                placeholder="johndoe.com"
                className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
              />
            </div>
          </div>
        </div>

        {/* LinkedIn Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <h3 className="text-lg font-medium text-gray-800">LinkedIn</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                <Linkedin className="w-4 h-4 mr-2 text-gray-500" />
                URL
              </label>
              <input
                value={links?.linkedin_url || ""}
                onChange={handleInputChange("linkedin_url")}
                type="url"
                name="linkedin_url"
                placeholder="https://www.linkedin.com/in/john-doe-123"
                className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                <ExternalLink className="w-4 h-4 mr-2 text-gray-500" />
                Display Text
              </label>
              <input
                value={links?.linkedin_text || ""}
                onChange={handleInputChange("linkedin_text")}
                type="text"
                name="linkedin_text"
                placeholder="john-doe-123"
                className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
              />
            </div>
          </div>
        </div>

        {/* GitHub Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <h3 className="text-lg font-medium text-gray-800">GitHub</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                <Github className="w-4 h-4 mr-2 text-gray-500" />
                URL
              </label>
              <input
                value={links?.github_url || ""}
                onChange={handleInputChange("github_url")}
                type="url"
                name="github_url"
                placeholder="https://www.github.com/johndoe"
                className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                <ExternalLink className="w-4 h-4 mr-2 text-gray-500" />
                Display Text
              </label>
              <input
                value={links?.github_text || ""}
                onChange={handleInputChange("github_text")}
                type="text"
                name="github_text"
                placeholder="johndoe"
                className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Twitter Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <h3 className="text-lg font-medium text-gray-800">Twitter</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                <Twitter className="w-4 h-4 mr-2 text-gray-500" />
                URL
              </label>
              <input
                value={links?.twitter_url || ""}
                onChange={handleInputChange("twitter_url")}
                type="url"
                name="twitter_url"
                placeholder="https://www.twitter.com/johndoe"
                className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                <ExternalLink className="w-4 h-4 mr-2 text-gray-500" />
                Display Text
              </label>
              <input
                value={links?.twitter_text || ""}
                onChange={handleInputChange("twitter_text")}
                type="text"
                name="twitter_text"
                placeholder="@johndoe"
                className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <h3 className="text-lg font-medium text-gray-800">Portfolio</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                <Briefcase className="w-4 h-4 mr-2 text-gray-500" />
                URL
              </label>
              <input
                value={links?.portfolio_url || ""}
                onChange={handleInputChange("portfolio_url")}
                type="url"
                name="portfolio_url"
                placeholder="https://www.portfolio.com/johndoe"
                className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                <ExternalLink className="w-4 h-4 mr-2 text-gray-500" />
                Display Text
              </label>
              <input
                value={links?.portfolio_text || ""}
                onChange={handleInputChange("portfolio_text")}
                type="text"
                name="portfolio_text"
                placeholder="My Portfolio"
                className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Custom Link Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <h3 className="text-lg font-medium text-gray-800">Other</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                <Link className="w-4 h-4 mr-2 text-gray-500" />
                URL
              </label>
              <input
                value={links?.other_url || ""}
                onChange={handleInputChange("other_url")}
                type="url"
                name="other_url"
                placeholder="https://www.example.com"
                className="w-full h-12 px-4 bg-white border border-gray-200/80 rounded-xl text-gray-900 text-base placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 hover:border-gray-300"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700 tracking-wide">
                <ExternalLink className="w-4 h-4 mr-2 text-gray-500" />
                Display Text
              </label>
              <input
                value={links?.other_text || ""}
                onChange={handleInputChange("other_text")}
                type="text"
                name="other_text"
                placeholder="Custom Link"
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
            Add Custom Link
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Links;