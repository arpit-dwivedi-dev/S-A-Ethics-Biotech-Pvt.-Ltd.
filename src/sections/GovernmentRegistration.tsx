import { motion } from 'motion/react';
import { governmentRegistrations } from '../data/content';

export default function GovernmentRegistration() {
  return (
    <section className="py-24 bg-bg-page">
      <div className="max-w-7xl mx-auto px-6">
        <span className="section-label">Compliance</span>
        <h2 className="font-heading font-medium text-3xl sm:text-4xl text-navy mb-14">
          Government Registration &amp; Accreditation
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {governmentRegistrations.map((reg, index) => (
            <motion.div
              key={reg.detail}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 }}
              className="bg-white p-6 flex flex-col items-center text-center"
            >
              <img src={reg.image} alt={reg.title} className="h-24 w-auto object-contain mb-5" />
              <h3 className="font-heading font-medium text-sm text-navy mb-1">{reg.title}</h3>
              <p className="text-text-muted text-xs">{reg.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
