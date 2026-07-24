import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import RevealImage from '../components/RevealImage';
import { directors } from '../data/content';

export default function Directors() {
  return (
    <>
      <PageHeader title="Directors" parent="Profile" />

      <section className="py-24 bg-bg-page">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
          {directors.map((director, index) => (
            <motion.div
              key={director.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`grid grid-cols-1 md:grid-cols-4 gap-10 items-start ${
                index % 2 === 1 ? 'bg-bg-soft' : 'bg-white'
              } rounded-2xl p-8 md:p-10 border border-border/70`}
            >
              <div className={`md:col-span-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <RevealImage
                  wrapperClassName="w-full aspect-[3/4] rounded-2xl"
                  src={director.image}
                  alt={director.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className={`md:col-span-3 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h2 className="text-2xl font-heading font-medium text-navy">{director.name}</h2>
                <p className="text-crimson font-sans font-semibold text-sm mb-4">{director.title}</p>
                <div className="flex flex-col gap-3">
                  {director.bio.map((para) => (
                    <p key={para.slice(0, 30)} className="text-text-muted text-sm leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
                {director.highlights && (
                  <ul className="mt-4 flex flex-col gap-2">
                    {director.highlights.map((h) => (
                      <li key={h} className="text-sm text-text-muted flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
                {director.link && (
                  <a
                    href={director.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-crimson transition-colors"
                  >
                    Read More
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
