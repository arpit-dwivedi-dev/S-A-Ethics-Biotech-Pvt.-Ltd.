import { motion } from 'motion/react';
import { channelPartners } from '../data/content';

export default function ChannelPartners() {
  return (
    <section className="py-24 bg-mesh-warm bg-grain">
      <div className="max-w-7xl mx-auto px-6">
        <span className="section-label">Partnerships</span>
        <h2 className="font-heading font-medium text-3xl sm:text-4xl text-navy mb-14">
          Our Channel Partners &amp; Business Associates
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {channelPartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="bg-white p-8 flex items-center justify-center h-40"
            >
              <img src={partner.image} alt={partner.name} className="max-h-20 w-auto object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
