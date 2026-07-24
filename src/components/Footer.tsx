import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { company, quickLinks, contact, offices } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-mesh-navy bg-grain text-white/70">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <p className="font-heading font-medium text-3xl text-white mb-2">
          SA <span className="font-display-italic text-gold">Ethics</span>
        </p>
        <p className="text-sm text-white/50 mb-12 max-w-sm">{company.parentEntity}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-14">
          <div>
            <h3 className="font-sans font-semibold text-white text-xs uppercase tracking-[0.2em] mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.to + link.label}>
                  <Link to={link.to} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-semibold text-white text-xs uppercase tracking-[0.2em] mb-5">Our Locations</h3>
            <div className="flex flex-col gap-4">
              {offices.map((office) => (
                <div key={office.label}>
                  <h4 className="text-sm text-white/90 font-medium mb-1">{office.label}</h4>
                  <p className="text-xs leading-relaxed text-white/50">{office.lines.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-sans font-semibold text-white text-xs uppercase tracking-[0.2em] mb-5">Contact Details</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <FaWhatsapp size={15} className="text-[#25D366] shrink-0" aria-hidden="true" />
                  {contact.phones[0].number}
                </a>
              </li>
              {contact.phones.slice(1).map((phone) => (
                <li key={phone.number}>
                  <a
                    href={`tel:${phone.number.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Phone size={15} className="shrink-0" aria-hidden="true" />
                    {phone.number}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={15} className="shrink-0" aria-hidden="true" />
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-white/40 text-center">
          &copy; {new Date().getFullYear()} {company.legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
