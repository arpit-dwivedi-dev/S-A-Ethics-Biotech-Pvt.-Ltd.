import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import RevealImage from '../components/RevealImage';
import { featuredProducts } from '../data/content';

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-bg-page">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <span className="section-label">Our Products</span>
            <h2 className="font-heading font-medium text-3xl sm:text-4xl text-navy">Featured Products</h2>
          </div>
          <Link to="/blood-bank-equipment" className="text-sm font-semibold text-navy hover:text-crimson transition-colors inline-flex items-center gap-1.5 shrink-0">
            View full catalogue
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 4) * 0.06 }}
              className="bg-white flex flex-col group"
            >
              <RevealImage
                wrapperClassName="aspect-square bg-white"
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6 pt-2 flex flex-col flex-1">
                <h3 className="font-heading font-medium text-lg text-navy mb-3">{product.name}</h3>
                <Link
                  to={product.href}
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-crimson hover:gap-2.5 transition-all"
                >
                  Details
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
