import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { navItems, contact } from '../data/content';

function DesktopNavItem({ item }: { item: (typeof navItems)[number] }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <li>
        <Link to={item.to!} className="text-sm font-sans font-medium text-text hover:text-navy transition-colors">
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 text-sm font-sans font-medium text-text hover:text-navy transition-colors"
      >
        {item.label}
        <ChevronDown size={14} aria-hidden="true" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 pt-3 min-w-[15rem] z-50"
          >
            <div className="card-surface py-2 overflow-hidden">
              {item.children.map((child) => (
                <Link
                  key={child.label}
                  to={child.to}
                  className="block px-4 py-2.5 text-sm text-text hover:bg-bg-soft hover:text-navy transition-colors"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      firstLinkRef.current?.focus();
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setOpen(false);
      };
      document.addEventListener('keydown', onKeyDown);
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', onKeyDown);
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [open]);

  const flatMobileLinks = navItems.flatMap((item) =>
    item.children ? item.children.map((c) => ({ label: c.label, to: c.to })) : [{ label: item.label, to: item.to! }]
  );

  return (
    <>
      <div className="bg-navy-dark text-white/80 text-xs">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between gap-4">
          <span className="hidden sm:inline font-medium tracking-wide truncate">
            Export Enquiries Welcome — ISO 9001:2015 &amp; 13485:2016 Certified
          </span>
          <div className="flex items-center gap-4 font-medium">
            <a href={`tel:${contact.phones[0].number.replace(/\s/g, '')}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={12} aria-hidden="true" />
              {contact.phones[0].number}
            </a>
            <a href={`mailto:${contact.email}`} className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={12} aria-hidden="true" />
              {contact.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 left-0 w-full z-50 bg-white transition-shadow ${
          scrolled ? 'shadow-[0_2px_16px_rgba(15,23,42,0.08)]' : ''
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
          <Link to="/" className="shrink-0">
            <img src="/assets/logo.png" alt="SA-Ethics" className="h-10 w-auto" />
          </Link>

          <ul className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </ul>

          <MagneticButton to="/contact-us" className="hidden lg:inline-flex btn-primary text-sm shrink-0">
            Get a Quote
          </MagneticButton>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden text-navy"
          >
            {open ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : undefined}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-20 border-b border-border shrink-0">
              <img src="/assets/logo.png" alt="SA-Ethics" className="h-10 w-auto" />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-navy"
              >
                <X size={28} aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto flex flex-col items-center gap-6 py-10">
              {flatMobileLinks.map((link, i) => (
                <Link
                  key={link.label + link.to}
                  ref={i === 0 ? firstLinkRef : undefined}
                  to={link.to}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-heading font-medium text-navy hover:text-crimson transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact-us"
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="mt-4 btn-primary"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
