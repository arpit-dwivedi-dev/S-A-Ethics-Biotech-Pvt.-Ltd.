import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { offices } from '../data/content';

export default function Locations() {
  return (
    <section className="py-24 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-6">
        <span className="section-label">Locations</span>
        <h2 className="font-heading font-medium text-3xl sm:text-4xl text-navy mb-12">Where we operate.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {offices.map((office, index) => (
            <motion.div
              key={office.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 flex flex-col h-full"
            >
              <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 bg-navy/10 text-navy">
                <MapPin size={22} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-heading font-medium text-navy mb-3">{office.label}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {office.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
