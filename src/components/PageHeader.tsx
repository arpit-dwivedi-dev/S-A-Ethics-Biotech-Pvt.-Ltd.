import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

type Props = {
  title: string;
  parent?: string;
};

export default function PageHeader({ title, parent }: Props) {
  return (
    <div className="bg-mesh-navy bg-grain py-14">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-heading font-medium text-white mb-3"
        >
          {title}
        </motion.h1>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/50">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          {parent && (
            <>
              <ChevronRight size={14} aria-hidden="true" />
              <span>{parent}</span>
            </>
          )}
          <ChevronRight size={14} aria-hidden="true" />
          <span className="text-white/90">{title}</span>
        </nav>
      </div>
    </div>
  );
}
