import { Link } from 'react-router-dom';
import { FiTwitter, FiLinkedin, FiGithub, FiFacebook } from 'react-icons/fi';
import { COMPANY_NAME } from '../utils/constants.js';

const FOOTER_LINKS = {
  Company: ['About Us', 'Careers', 'Blog', 'Contact'],
  Resources: ['Documentation', 'Help Center', 'API Reference', 'Community'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Security', 'Cookie Policy'],
};

const SOCIAL_LINKS = [
  { icon: FiTwitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com' },
  { icon: FiFacebook, label: 'Facebook', href: 'https://facebook.com' },
];

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div className="container-app py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-bold text-primary-600 dark:text-primary-400">{COMPANY_NAME}</span>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              The modern CRM that helps your team sell smarter and grow faster.
            </p>
            <div className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-primary-600 hover:border-primary-300 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <Link to="/dashboard" className="text-xs text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
            Admin Dashboard
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
