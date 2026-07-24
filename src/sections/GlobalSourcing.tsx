import { motion } from 'motion/react';
import RevealImage from '../components/RevealImage';
import { factoryVisits } from '../data/content';

export default function GlobalSourcing() {
  return (
    <section className="py-24 bg-bg-page">
      <div className="max-w-7xl mx-auto px-6">
        <span className="section-label">Global Sourcing</span>
        <h2 className="font-heading font-medium text-3xl sm:text-4xl text-navy mb-4">
          Our clients &amp; factory visits.
        </h2>
        <p className="text-text-muted max-w-2xl mb-10">
          A look inside our sourcing relationships — our team on the ground at manufacturing partners including
          Foshan Alpicool Electric Appliance Co., Ltd. and JIDI Instruments.
        </p>

        <RevealImage
          wrapperClassName="rounded-2xl w-full h-56 sm:h-80 mb-12"
          src="/assets/gallery-collage.jpg"
          alt="Collage of SA-Ethics team visits to partner factories alongside a centrifuge under production"
          className="w-full h-full object-cover"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {factoryVisits.map((visit, index) => (
            <motion.figure
              key={visit.image}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 3) * 0.08 }}
              className="bg-white overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={visit.image}
                  alt={visit.caption}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <figcaption className="p-4 text-sm text-text-muted">{visit.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
