import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import RevealImage from './RevealImage';
import type { CatalogProduct } from '../data/content';

export default function ProductGrid({ products }: { products: CatalogProduct[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
      {products.map((product, index) => (
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
              to="/contact-us"
              className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-crimson hover:gap-2.5 transition-all"
            >
              Enquire Now
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
