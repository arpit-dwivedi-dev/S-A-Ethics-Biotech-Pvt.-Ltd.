import PageHeader from '../components/PageHeader';
import ProductGrid from '../components/ProductGrid';
import { donorChairs } from '../data/content';

export default function PortableBloodDonorChair() {
  return (
    <>
      <PageHeader title="Portable Blood Donor Chair" parent="Products" />

      <section className="py-24 bg-bg-page">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-text-muted max-w-2xl mb-12">
            Customised, portable donor chairs designed for donor comfort and quick setup at camps and blood banks
            alike.
          </p>
          <ProductGrid products={donorChairs} />
        </div>
      </section>
    </>
  );
}
