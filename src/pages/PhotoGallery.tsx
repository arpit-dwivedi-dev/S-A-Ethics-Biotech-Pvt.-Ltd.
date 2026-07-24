import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Seo from '../components/Seo';
import { conferenceGallery, factoryVisits } from '../data/content';

const allPhotos = [...conferenceGallery, ...factoryVisits];

export default function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowRight') setActiveIndex((i) => (i === null ? i : (i + 1) % allPhotos.length));
      if (e.key === 'ArrowLeft') setActiveIndex((i) => (i === null ? i : (i - 1 + allPhotos.length) % allPhotos.length));
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [activeIndex]);

  return (
    <>
      <Seo
        title="Photo Gallery | SA Ethics Biotech — Events, Conferences & Factory Visits"
        description="Browse photos from SA Ethics Biotech's international trade shows, ISBT conferences and factory visits with global blood bank equipment manufacturing partners."
        keywords="SA Ethics Biotech gallery, ISBT conference, blood bank equipment trade show, blood bank exhibition photos, blood bank equipment factory visit"
        path="/photo-gallery"
        breadcrumbs={[{ name: 'Photo Gallery', path: '/photo-gallery' }]}
      />
      <PageHeader title="Photo Gallery" />

      <section className="py-24 bg-bg-page">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPhotos.map((photo, index) => (
              <motion.button
                key={photo.image}
                type="button"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % 3) * 0.08 }}
                onClick={() => setActiveIndex(index)}
                className="card-surface card-hover overflow-hidden text-left group"
              >
                <div className="overflow-hidden">
                  <img
                    src={photo.image}
                    alt={photo.caption}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <figcaption className="p-4 text-sm text-text-muted">{photo.caption}</figcaption>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
            onClick={() => setActiveIndex(null)}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setActiveIndex(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white"
            >
              <X size={32} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((i) => (i === null ? i : (i - 1 + allPhotos.length) % allPhotos.length));
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
            >
              <ChevronLeft size={36} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((i) => (i === null ? i : (i + 1) % allPhotos.length));
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
            >
              <ChevronRight size={36} aria-hidden="true" />
            </button>
            <img
              src={allPhotos[activeIndex].image}
              alt={allPhotos[activeIndex].caption}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] max-w-4xl w-full object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
