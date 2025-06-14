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
    {
      id: 2,
      name: "Links",
      path: "/links",
      icon: Globe,
      isDefault: true,
      isActive: false,
    },
    {
      id: 3,
      name: "Education",
      path: "/education",
      icon: GraduationCap,
      isDefault: true,
      isActive: false,
    },
    {
      id: 4,
      name: "Experience",
      path: "/experience",
      icon: Briefcase,
      isDefault: true,
      isActive: false,
    },
    {
      id: 5,
      name: "Skills",
      path: "/skills",
      icon: Code,
      isDefault: true,
      isActive: false,
    },
    {
      id: 6,
      name: "Certifications",
      path: "/certifications",
      icon: Award,
      isDefault: true,
      isActive: false,
    },
  ]);

  return (
    <div className="w-80 h-auto bg-white border-r border-gray-200/60 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200/60">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          CV Sections
        </h2>
        <p className="text-sm text-gray-500">Organize your resume sections</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {/* Sections list */}
        <div className="space-y-2">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <Link to={section.name} key={section.id}>
                <div
                  className={`group flex items-center justify-between p-4 rounded-xl border transition-all duration-200 cursor-pointer hover:border-blue-300/60 hover:bg-blue-50/30 ${
                    section.isActive
                      ? "border-blue-300/80 bg-blue-50/40 shadow-sm"
                      : "border-gray-200/80 bg-white"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2.5 rounded-lg transition-colors duration-200 ${
                        section.isActive
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-500 group-hover:bg-blue-100/80 group-hover:text-blue-600"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span
                      className={`font-medium transition-colors duration-200 ${
                        section.isActive
                          ? "text-blue-700"
                          : "text-gray-700 group-hover:text-blue-700"
                      }`}
                    >
                      {section.name}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-all duration-200">
                    {!section.isDefault && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 text-gray-400 hover:text-red-500 rounded-lg"
                      >
                        <MoreHorizontal className="w-3 h-3" />
                      </Button>
                    )}
                    <ChevronRight
                      className={`w-4 h-4 transition-all duration-200 ${
                        section.isActive
                          ? "text-blue-600 rotate-90"
                          : "text-gray-400 group-hover:text-blue-600"
                      }`}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Add Section Button */}
        <div className="mt-6">
          <Button
            variant="outline"
            className="w-full h-12 text-sm border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 rounded-xl font-medium text-gray-600 hover:text-blue-600 group"
          >
            <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
            Add New Section
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
