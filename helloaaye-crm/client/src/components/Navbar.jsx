import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle.jsx';
import Button from './Button.jsx';
import { COMPANY_NAME } from '../utils/constants.js';

const NAV_LINKS = [
  { label: 'Features', hash: '#features' },
  { label: 'Pricing', hash: '#pricing' },
  { label: 'Testimonials', hash: '#testimonials' },
  { label: 'FAQ', hash: '#faq' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goToSection = (hash) => {
    setOpen(false);
    if (location.pathname !== '/') {
      navigate(`/${hash}`);
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur border-gray-200 dark:border-gray-800'
          : 'bg-white dark:bg-gray-950 border-transparent'
      }`}
    >
      <nav className="container-app flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary-600 dark:text-primary-400">
          {COMPANY_NAME}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => goToSection(link.hash)}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button onClick={() => goToSection('#contact')}>Contact Sales</Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
            className="p-2 text-gray-600 dark:text-gray-300"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 pb-4">
          <div className="flex flex-col gap-3 pt-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => goToSection(link.hash)}
                className="text-left text-sm font-medium text-gray-600 dark:text-gray-300 py-1"
              >
                {link.label}
              </button>
            ))}
            <Button onClick={() => goToSection('#contact')} className="mt-2 w-full">
              Contact Sales
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
