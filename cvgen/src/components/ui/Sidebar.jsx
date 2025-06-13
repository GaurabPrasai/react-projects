import React, { useState } from "react";
import {
  Plus,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Phone,
  MapPin,
  Mail,
  Globe,
  Code,
  Languages,
  Heart,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "./button";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [sections, setSections] = useState([
    { id: 1, name: "Profile", icon: User, isDefault: true, isActive: true },
    { id: 2, name: "Links", path:"/links", icon: Globe, isDefault: true, isActive: false },
    {id: 3, name: "Education",path:"/education", icon: GraduationCap, isDefault: true, isActive: false},
    { id: 4, name: "Experience",path:"/experience", icon: Briefcase, isDefault: true, isActive: false,},
    { id: 5, name: "Skills",path:"/skills", icon: Code, isDefault: true, isActive: false},
    { id: 6, name: "Certifications",path:"/certifications", icon: Award, isDefault: true, isActive: false,},
  ]);

  return (
    <div className="w-72 h-auto bg-white flex flex-col shadow-lg border-r border-gray-100">
      {/* Header */}
      <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Resume Builder</h2>
        <p className="text-sm text-gray-600">
          Create your professional CV step by step
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {/* Sections list */}
        <div className="space-y-2">
          {sections.map((section, index) => {
            const IconComponent = section.icon;

            return (
              <Link to={section.path} key={section.id}>
                <div
                  className={`group relative flex items-center justify-between p-4 rounded-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:shadow-md bg-white text-gray-700 hover:bg-gray-50 border border-gray-100 hover:border-blue-200"
                  }`}
                  onMouseEnter={() => setHoveredSection(section.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2 rounded-lg transition-all duration-300 "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span
                      className={`font-semibold text-sm transition-all duration-300 text-gray-700"
                      }`}
                    >
                      {section.name}
                    </span>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-all duration-300 text-gray-400"
                    }`}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Preview Section removed as requested */}

        {/* Add Section Button */}
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
};

export default Sidebar;
