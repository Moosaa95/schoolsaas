import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <nav className="flex space-x-8">
      <Link
        to="/"
        className="font-semibold text-gray-900 transition duration-300 hover:text-red-700 hover:border-b-2 hover:border-red-700"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="font-semibold text-gray-900 transition duration-300 hover:text-red-700 hover:border-b-2 hover:border-red-700"
      >
        About
      </Link>
      <Link
        to="/services"
        className="font-semibold text-gray-900 transition duration-300 hover:text-red-700 hover:border-b-2 hover:border-red-700"
      >
        Services
      </Link>
      <Link
        to="/contact"
        className="font-semibold text-gray-900 transition duration-300 hover:text-red-700 hover:border-b-2 hover:border-red-700"
      >
        Contact
      </Link>
      <Link
        to="/login"
        className="px-4 py-2 text-white transition duration-300 bg-red-700 rounded-md hover:bg-red-800"
      >
        Login
      </Link>
    </nav>
  );
};

export default MainNav;
