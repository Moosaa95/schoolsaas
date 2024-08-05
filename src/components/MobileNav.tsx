import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="text-gray-700 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform transform hover:rotate-180" />
        ) : (
          <Menu className="w-6 h-6 transition-transform transform hover:rotate-90" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 w-48 py-2 mt-2 bg-white border rounded-lg shadow-lg animate-slide-in">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="block px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-100"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={toggleMenu}
            className="block px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-100"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="block px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-100"
          >
            Contact
          </Link>
          <Link
            to="/login"
            onClick={toggleMenu}
            className="block px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-100"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
