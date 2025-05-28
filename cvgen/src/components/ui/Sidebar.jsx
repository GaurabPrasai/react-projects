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

const Sidebar = () => {
  const [sections, setSections] = useState([
    { id: 1, name: "Profile", icon: User, isDefault: true, isActive: true },
    { id: 2, name: "Contact", icon: Phone, isDefault: true, isActive: false },
    {
      id: 3,
      name: "Education",
      icon: GraduationCap,
      isDefault: true,
      isActive: false,
    },
    {
      id: 4,
      name: "Experience",
      icon: Briefcase,
      isDefault: true,
      isActive: false,
    },
    { id: 5, name: "Skills", icon: Code, isDefault: true, isActive: false },
    {
      id: 6,
      name: "Certifications",
      icon: Award,
      isDefault: true,
      isActive: false,
    },
  ]);

  return (
    <div className="w-80 h-auto bg-card border-r border-border flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <h2 className="text-xl font-semibold text-foreground mb-2">
          CV Sections
        </h2>
        <p className="text-sm text-muted-foreground">
          Organize your resume sections
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {/* Sections list */}
        <div className="space-y-2">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <div
                key={section.id}
                className={`group flex items-center justify-between p-3 rounded-lg border transition-all duration-200 cursor-pointer hover:border-primary/50 hover:bg-accent/50 ${
                  section.isActive
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "border-border bg-background"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`p-2 rounded-md transition-colors ${
                      section.isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span
                    className={`font-medium transition-colors ${
                      section.isActive ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {section.name}
                  </span>
                </div>

                <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {!section.isDefault && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-muted-foreground hover:text-destructive"
                    >
                      <MoreHorizontal className="w-3 h-3" />
                    </Button>
                  )}
                  <ChevronRight
                    className={`w-4 h-4 transition-all ${
                      section.isActive
                        ? "text-primary rotate-90"
                        : "text-muted-foreground"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Add Section Button */}
        <div className="mt-6">
          <Button
            variant="outline"
            className="w-full h-12 border-2 border-dashed border-muted-foreground/30 hover:border-primary hover:bg-primary/5 transition-all duration-200"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add New Section
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
