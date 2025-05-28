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

        {/* Frameworks & Libraries */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            FRAMEWORKS & LIBRARIES
          </label>
          <textarea
            rows={3}
            placeholder="React, Node.js, Express, Django, Angular, Vue.js..."
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Tools & Technologies */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            TOOLS & TECHNOLOGIES
          </label>
          <textarea
            rows={3}
            placeholder="Git, Docker, AWS, MongoDB, PostgreSQL, Redis..."
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
            placeholder="MySQL, PostgreSQL, MongoDB, Redis, Firebase..."
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Other Technical Skills */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            OTHER TECHNICAL SKILLS
          </label>
          <textarea
            rows={3}
            placeholder="Machine Learning, DevOps, Cloud Computing, Mobile Development..."
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 my-8" />

      {/* Soft Skills Section */}
      <div className="mb-8">
        <div className="flex items-center mb-6">
          <h3 className="text-lg font-medium text-gray-800">
            Soft Skills
          </h3>
        </div>

        {/* Communication Skills */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            COMMUNICATION SKILLS
          </label>
          <textarea
            rows={3}
            placeholder="Public Speaking, Technical Writing, Presentation Skills, Active Listening..."
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Leadership Skills */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            LEADERSHIP SKILLS
          </label>
          <textarea
            rows={3}
            placeholder="Team Management, Project Management, Mentoring, Strategic Planning..."
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Problem Solving */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            PROBLEM SOLVING
          </label>
          <textarea
            rows={3}
            placeholder="Critical Thinking, Analytical Skills, Creative Problem Solving, Debugging..."
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Interpersonal Skills */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            INTERPERSONAL SKILLS
          </label>
          <textarea
            rows={3}
            placeholder="Teamwork, Collaboration, Empathy, Conflict Resolution, Networking..."
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Work Ethic & Personal Qualities */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            WORK ETHIC & PERSONAL QUALITIES
          </label>
          <textarea
            rows={3}
            placeholder="Time Management, Adaptability, Self-Motivation, Attention to Detail, Reliability..."
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 my-8" />

      {/* Languages Section */}
      <div>
        <div className="flex items-center mb-6">
          <h3 className="text-lg font-medium text-gray-800">
            Languages
          </h3>
        </div>

        {/* Languages */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-gray-800 mb-2 uppercase tracking-wider">
            LANGUAGES SPOKEN
          </label>
          <textarea
            rows={3}
            placeholder="English (Native), Spanish (Fluent), French (Conversational), Mandarin (Basic)..."
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;