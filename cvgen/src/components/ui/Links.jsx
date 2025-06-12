import { useContext } from "react";
import { Button } from "./button";
import { Plus } from "lucide-react";
import cvContext from "../../context/cvcontext.js";

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
    <div className="p-10">
      {/* Website */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <label className="block text-sm font-medium text-gray-800 w-24">
            Website
          </label>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
              URL
            </label>
            <input
              value={links?.website_url || ""}
              onChange={handleInputChange("website_url")}
              type="url"
              name="website_url"
              placeholder="https://www.johndoe.com"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
              TEXT
            </label>
            <input
              value={links?.website_text || ""}
              onChange={handleInputChange("website_text")}
              type="text"
              name="website_text"
              placeholder="johndoe.com"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* LinkedIn */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <label className="block text-sm font-medium text-gray-800 w-24">
            LinkedIn
          </label>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
              URL
            </label>
            <input
              value={links?.linkedin_url || ""}
              onChange={handleInputChange("linkedin_url")}
              type="url"
              name="linkedin_url"
              placeholder="https://www.linkedin.com/john-doe-123"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
              TEXT
            </label>
            <input
              value={links?.linkedin_text || ""}
              onChange={handleInputChange("linkedin_text")}
              type="text"
              name="linkedin_text"
              placeholder="john-doe-123"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* GitHub */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <label className="block text-sm font-medium text-gray-800 w-24">
            GitHub
          </label>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
              URL
            </label>
            <input
              value={links?.github_url || ""}
              onChange={handleInputChange("github_url")}
              type="url"
              name="github_url"
              placeholder="https://www.github.com/johndoe"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
              TEXT
            </label>
            <input
              value={links?.github_text || ""}
              onChange={handleInputChange("github_text")}
              type="text"
              name="github_text"
              placeholder="johndoe"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Twitter */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <label className="block text-sm font-medium text-gray-800 w-24">
            Twitter
          </label>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
              URL
            </label>
            <input
              value={links?.twitter_url || ""}
              onChange={handleInputChange("twitter_url")}
              type="url"
              name="twitter_url"
              placeholder="https://www.twitter.com/johndoe"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
              TEXT
            </label>
            <input
              value={links?.twitter_text || ""}
              onChange={handleInputChange("twitter_text")}
              type="text"
              name="twitter_text"
              placeholder="@johndoe"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <label className="block text-sm font-medium text-gray-800 w-24">
            Portfolio
          </label>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
              URL
            </label>
            <input
              value={links?.portfolio_url || ""}
              onChange={handleInputChange("portfolio_url")}
              type="url"
              name="portfolio_url"
              placeholder="https://www.portfolio.com/johndoe"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
              TEXT
            </label>
            <input
              value={links?.portfolio_text || ""}
              onChange={handleInputChange("portfolio_text")}
              type="text"
              name="portfolio_text"
              placeholder="My Portfolio"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Custom Link */}
      <div>
        <div className="flex items-center mb-3">
          <label className="block text-sm font-medium text-gray-800 w-24">
            Other
          </label>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
              URL
            </label>
            <input
              value={links?.other_url || ""}
              onChange={handleInputChange("other_url")}
              type="url"
              name="other_url"
              placeholder="https://www.example.com"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
              TEXT
            </label>
            <input
              value={links?.other_text || ""}
              onChange={handleInputChange("other_text")}
              type="text"
              name="other_text"
              placeholder="Custom Link"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
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
};

export default Links;
