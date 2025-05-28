const Profile = () => {
  return (
    <div className="p-10">
      {/* First Row: Full Name and Profession */}
      <div className="grid grid-cols-2 gap-8 mb-6">
        <div>
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            FULL NAME
          </label>
          <input
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
          name="summary"
          rows={5}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  );
}

export default Profile;
