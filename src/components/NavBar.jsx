import React from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { GrInfo } from "react-icons/gr";
import iconLight from '../assets/logo-light.png';
import iconDark from '../assets/logo-dark.png';

const NavBar = ({ darkMode, toggleDarkMode }) => {
    return (
        <nav className="w-full px-4 sm:px-8 flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <img src={ darkMode ? iconLight : iconDark } alt="DocsGo Logo" className="w-12 h-12" />
                <h1 className="text-2xl font-semibold" title="Home">
                  <Link to="/"><button>DocsGo</button></Link>
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4 ml-auto">
              <Link to="/about" className="p-2 bg-gray-200 dark:bg-gray-800 rounded">
                <button><GrInfo title="About DocsGo" /></button>
              </Link>
              <button
                onClick={toggleDarkMode}
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded ml-4">
                {darkMode ? <FaSun title="Switch to Light Mode" /> : <FaMoon title="Switch to Dark Mode" />}
              </button>
            </div>
          </nav>
    );
}

export default NavBar;