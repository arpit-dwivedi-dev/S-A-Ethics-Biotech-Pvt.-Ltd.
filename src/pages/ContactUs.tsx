import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import Locations from '../sections/Locations';
import { contact } from '../data/content';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader title="Contact Us" />

      <section className="py-24 bg-bg-page">
        <div className="max-w-7xl mx-auto px-6">
          <span className="section-label">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-medium text-navy mb-12">
            Don&apos;t be a stranger. <span className="font-display-italic text-crimson">Just say hello.</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
            <motion.form
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="lg:col-span-3 card-surface p-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-sans font-medium text-navy mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg bg-bg-soft border border-border px-4 py-3 text-text focus:outline-none focus:border-navy transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-sans font-medium text-navy mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg bg-bg-soft border border-border px-4 py-3 text-text focus:outline-none focus:border-navy transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-sans font-medium text-navy mb-2">
                  Contact Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full rounded-lg bg-bg-soft border border-border px-4 py-3 text-text focus:outline-none focus:border-navy transition-colors"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-sans font-medium text-navy mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="w-full rounded-lg bg-bg-soft border border-border px-4 py-3 text-text focus:outline-none focus:border-navy transition-colors"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-sans font-medium text-navy mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-lg bg-bg-soft border border-border px-4 py-3 text-text focus:outline-none focus:border-navy transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="sm:col-span-2 btn-primary inline-flex items-center justify-center gap-2 group"
              >
                {submitted ? 'Message received' : 'Send Message'}
                {!submitted && <Send size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />}
              </button>
              {submitted && (
                <p role="status" className="sm:col-span-2 text-sm text-crimson">
                  Thanks for reaching out — our team will get back to you shortly.
                </p>
              )}
            </motion.form>

            <div className="lg:col-span-2 flex flex-col gap-6">
              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-2xl bg-[#25D366] text-white hover:brightness-95 transition-all"
              >
                <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 bg-white/20">
                  <FaWhatsapp size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading font-medium">Chat on WhatsApp</h3>
                  <p className="text-sm text-white/90">{contact.phones[0].number}</p>
                </div>
              </a>

              <div className="p-6 rounded-2xl bg-bg-soft border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 bg-navy/10 text-navy">
                    <Phone size={20} aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-medium text-navy">Call Us</h3>
                </div>
                <div className="flex flex-col gap-2">
                  {contact.phones.map((phone) => (
                    <a
                      key={phone.number}
                      href={`tel:${phone.number.replace(/\s/g, '')}`}
                      className="text-text-muted text-sm hover:text-navy transition-colors"
                    >
                      {phone.number}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 p-6 rounded-2xl bg-bg-soft border border-border hover:border-navy transition-colors"
              >
                <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 bg-crimson/10 text-crimson">
                  <Mail size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading font-medium text-navy">Email Us</h3>
                  <p className="text-text-muted text-sm">{contact.email}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden card-surface h-96">
            <iframe
              title="SA-Ethics registered office location"
              src={contact.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Locations />
    </>
  );
}
