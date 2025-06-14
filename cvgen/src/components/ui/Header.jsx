import { Button } from "./button";
import { Link } from "react-router-dom";
import logo from "/src/assets/logo.svg"
import { FileText } from "lucide-react";

const Header = () => {
  return (
    <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-white">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" />
      </div>
      <Link to="preview">
        <Button className="bg-primary text-white font-medium shadow-sm hover:shadow-md hover:bg-primary/90 transition-all duration-200">
          Preview CV
        </Button>
      </Link>
    </div>
  );
};

export default Header;
