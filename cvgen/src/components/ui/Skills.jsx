const Skills = () => {
  return (
    <div className="p-10">
      {/* Technical Skills Section */}
      <div className="mb-8">
        <div className="flex items-center mb-6">
          <h3 className="text-lg font-medium text-gray-800">
            Technical Skills
          </h3>
        </div>

        {/* Programming Languages */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            PROGRAMMING LANGUAGES
          </label>
          <textarea
            rows={3}
            placeholder="JavaScript, Python, Java, C++, TypeScript..."
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Frameworks & Tools */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            FRAMEWORKS & TOOLS
          </label>
          <textarea
            rows={3}
            placeholder="React, Node.js, Express, Docker, Git, AWS..."
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Databases */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            DATABASES
          </label>
          <textarea
            rows={2}
            placeholder="MySQL, PostgreSQL, MongoDB, Redis..."
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 my-8" />

      {/* Soft Skills Section */}
      <div className="mb-8">
        <div className="flex items-center mb-6">
          <h3 className="text-lg font-medium text-gray-800">Soft Skills</h3>
        </div>

        {/* Communication & Leadership */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            COMMUNICATION & LEADERSHIP
          </label>
          <textarea
            rows={3}
            placeholder="Public Speaking, Team Management, Technical Writing, Presentation Skills..."
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Problem Solving & Collaboration */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            PROBLEM SOLVING & COLLABORATION
          </label>
          <textarea
            rows={3}
            placeholder="Critical Thinking, Teamwork, Analytical Skills, Conflict Resolution..."
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 my-8" />

      {/* Languages Section */}
      <div>
        <div className="flex items-center mb-6">
          <h3 className="text-lg font-medium text-gray-800">Languages</h3>
        </div>

        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            LANGUAGES SPOKEN
          </label>
          <textarea
            rows={2}
            placeholder="English (Native), Spanish (Fluent), French (Conversational)..."
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
