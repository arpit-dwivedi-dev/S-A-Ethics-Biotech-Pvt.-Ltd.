import PageHeader from '../components/PageHeader';
import ProductGrid from '../components/ProductGrid';
import { transportationBoxes } from '../data/content';

export default function MobileBloodTransportationBox() {
  return (
    <>
      <PageHeader title="Mobile Blood Transportation Box" parent="Products" />

      <section className="py-24 bg-bg-page">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-text-muted max-w-2xl mb-12">
            Rugged, temperature-controlled transportation boxes available across four capacities — built to keep
            blood and plasma safely within range from collection point to storage.
          </p>
          <ProductGrid products={transportationBoxes} />
        </div>
      </section>
    </>
  );
}
