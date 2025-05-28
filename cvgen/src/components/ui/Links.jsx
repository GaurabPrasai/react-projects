const Links = () => {
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
              type="text"
              name="other_text"
              placeholder="Custom Link"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;