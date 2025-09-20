import { Link } from 'react-router-dom';
import { pageData } from '../data/data';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const navLinks = pageData.pages.map(page => ({
    name: page.name,
    path: page.path,
  }));

  return (
    <footer className="bg-primary text-secondary py-12 section-padding border-t border-gray-800">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h3 className="h3 mb-4 text-accent">{pageData.businessName}</h3>
          <p className="text-body text-muted mb-4 max-w-sm mx-auto md:mx-0">
            {pageData.websiteDescription}
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" aria-label="Facebook" className="text-accent hover:text-secondary transition-colors duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="text-accent hover:text-secondary transition-colors duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-accent hover:text-secondary transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="text-accent hover:text-secondary transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="h3 mb-4 text-accent">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="text-body text-muted hover:text-secondary transition-colors duration-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info (if available in pageData for Contact Us page) */}
        {pageData.pages.find(p => p.name === "Contact Us")?.content.find(b => b.type === "contact_info") && (
          <div>
            <h3 className="h3 mb-4 text-accent">Contact Us</h3>
            <ul className="space-y-2">
              {pageData.pages.find(p => p.name === "Contact Us")
                             .content.find(b => b.type === "contact_info")
                             .items.map((item, index) => (
                <li key={index} className="flex items-center justify-center md:justify-start text-body text-muted">
                  {item.icon === "FaEnvelope" && <FaEnvelope className="mr-2 text-accent" />}
                  {item.icon === "FaPhone" && <FaPhone className="mr-2 text-accent" />}
                  {item.icon === "FaMapMarkerAlt" && <FaMapMarkerAlt className="mr-2 text-accent" />}
                  <span>{item.label}: {item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="border-t border-gray-700 mt-10 pt-8 text-center text-caption text-muted">
        &copy; {new Date().getFullYear()} {pageData.businessName}. All rights reserved.
      </div>
    </footer>
  );
}

// React Icons for Footer (since they are conditional)
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';