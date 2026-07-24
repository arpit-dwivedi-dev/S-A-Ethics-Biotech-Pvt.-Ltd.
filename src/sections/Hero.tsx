import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import { company, stats } from '../data/content';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative bg-mesh-warm bg-grain overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-border text-xs font-semibold text-navy mb-7">
            <ShieldCheck size={14} className="text-crimson" aria-hidden="true" />
            ISO 9001:2015 &amp; 13485:2016 Certified
          </div>

          <motion.h1
            initial={{ x: -16 }}
            animate={{ x: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.7, ease: 'easeOut' }}
            className="font-heading font-medium text-[2.75rem] sm:text-6xl leading-[1.05] text-navy mb-6"
          >
            Blood bank equipment,
            <br />
            built on <span className="font-display-italic text-crimson">honesty</span>.
          </motion.h1>

          <p className="text-lg text-text-muted max-w-md mb-9 leading-relaxed">{company.description}</p>

          <div className="flex flex-wrap gap-4">
            <MagneticButton to="/blood-bank-equipment" className="btn-primary inline-flex items-center gap-2 group">
              Explore Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </MagneticButton>
            <MagneticButton to="/contact-us" className="btn-secondary inline-flex items-center gap-2">
              Request a Quote
            </MagneticButton>
          </div>
        </div>

        <div className="lg:col-span-6 relative h-[340px] sm:h-[420px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="absolute top-0 right-0 w-[78%] h-[82%] rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_-15px_rgba(14,23,64,0.25)]"
          >
            <img src="/assets/hero-collage.jpg" alt="SA-Ethics blood bank equipment range" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="absolute bottom-0 left-0 w-[62%] h-[46%] rounded-3xl overflow-hidden border-4 border-bg-page shadow-[0_20px_60px_-15px_rgba(14,23,64,0.3)]"
          >
            <img src="/assets/gallery-collage.jpg" alt="Our team on the ground with manufacturing partners" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute top-1/2 left-2 -translate-y-1/2 card-surface px-4 py-3 shadow-[0_12px_30px_-8px_rgba(14,23,64,0.2)] hidden sm:block"
          >
            <div className="text-2xl font-heading font-medium text-navy">50+</div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-text-muted">Blood Banks Built</div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className={i === 0 ? 'col-span-2 md:col-span-1' : ''}
            >
              <div className={`text-stat text-navy ${i === 0 ? 'text-5xl' : 'text-4xl'}`}>{s.value}</div>
              <div className="text-xs font-semibold uppercase tracking-widest text-text-muted mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
