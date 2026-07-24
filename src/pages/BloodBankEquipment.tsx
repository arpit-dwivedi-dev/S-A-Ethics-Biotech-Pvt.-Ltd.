import PageHeader from '../components/PageHeader';
import ProductGrid from '../components/ProductGrid';
import { bloodBankEquipment } from '../data/content';

export default function BloodBankEquipment() {
  return (
    <>
      <PageHeader title="Blood Bank Equipment" parent="Products" />

      <section className="py-24 bg-bg-page">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-text-muted max-w-2xl mb-12">
            So far we succeeded in marketing our products with customers in India as well as abroad. Our customers are
            satisfied with our products, as we are getting repeat orders from the same customers.
          </p>
          <ProductGrid products={bloodBankEquipment} />
        </div>
      </section>
    </>
  );
}
