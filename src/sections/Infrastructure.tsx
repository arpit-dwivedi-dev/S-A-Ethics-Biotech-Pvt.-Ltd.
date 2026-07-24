import { Factory, Microscope } from 'lucide-react';
import RevealImage from '../components/RevealImage';

const facilityPhotos = [
  {
    image: '/assets/visit-factory-floor.jpg',
    alt: 'Production floor at our manufacturing partner facility',
  },
  {
    image: '/assets/visit-jidi-warehouse.jpg',
    alt: 'Warehouse and dispatch area at our partner facility',
  },
];

export default function Infrastructure() {
  return (
    <section className="py-24 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-6">
        <span className="section-label">Infrastructure</span>
        <h2 className="font-heading font-medium text-3xl sm:text-4xl text-navy mb-4">
          Manufacturing you can verify.
        </h2>
        <p className="text-text-muted max-w-2xl mb-12">
          We visit and audit every partner facility in person before a single device carries the SA-Ethics name —
          from the production line to final dispatch.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {facilityPhotos.map((photo, index) => (
            <RevealImage
              key={photo.image}
              wrapperClassName="rounded-2xl w-full h-72"
              delay={index * 0.1}
              src={photo.image}
              alt={photo.alt}
              className="w-full h-full object-cover"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
          <div className="flex items-start gap-4 p-7 bg-white">
            <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 bg-navy/10 text-navy">
              <Factory size={22} aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-heading font-medium text-navy mb-1">On-Site Quality Audits</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Our team travels to each partner factory to inspect production runs and verify build quality first-hand.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-7 bg-white">
            <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 bg-crimson/10 text-crimson">
              <Microscope size={22} aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-heading font-medium text-navy mb-1">Certified Manufacturing Partners</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Devices are sourced from ISO-compliant manufacturing partners under our direct quality oversight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
