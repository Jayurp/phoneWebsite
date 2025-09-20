import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { pageData } from '../data/data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = pageData.pages.map(page => ({
    name: page.name,
    path: page.path,
  }));

  return (
    <header className="bg-primary text-secondary shadow-md sticky top-0 z-50">
      <nav className="container flex justify-between items-center py-4">
        <Link to="/" className="text-2xl font-bold text-secondary">
          {pageData.businessName}
        </Link>

        <div className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => {
            if (link.name === "Product Detail") return null; // skip this link
            return (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-medium hover:text-accent transition-colors duration-300 ${
                    isActive ? "text-accent" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-secondary focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary pb-4 shadow-lg absolute w-full z-40">
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `text-lg font-medium text-secondary hover:text-accent transition-colors duration-300 ${
                    isActive ? "text-accent" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}