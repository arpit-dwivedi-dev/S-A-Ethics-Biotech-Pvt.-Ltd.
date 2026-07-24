import PageHeader from '../components/PageHeader';
import ProductGrid from '../components/ProductGrid';
import Seo, { SITE_URL } from '../components/Seo';
import { bloodBankEquipment } from '../data/content';

export default function BloodBankEquipment() {
  return (
    <>
      <Seo
        title="Blood Bank Equipment | Refrigerated Centrifuge, Plasma Freezer & ELISA Systems"
        description="Explore SA Ethics Biotech's range of blood bank equipment — refrigerated centrifuges, plasma freezers, blood collection monitors, ELISA readers/washers/incubators, automatic donor couches, plasma thawing baths and lab balances."
        keywords="blood bank equipment, refrigerated centrifuge, plasma freezer, blood collection monitor, ELISA reader, ELISA washer, ELISA incubator shaker, automatic donor couch, plasma thawing bath, cryo freezer, laminar air flow bench, blood bank equipment manufacturer India, blood bank equipment supplier"
        path="/blood-bank-equipment"
        breadcrumbs={[{ name: 'Blood Bank Equipment', path: '/blood-bank-equipment' }]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Blood Bank Equipment',
          itemListElement: bloodBankEquipment.map((product, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'Product',
              name: product.name,
              image: `${SITE_URL}${product.image}`,
              brand: 'SA Ethics Biotech',
            },
          })),
        }}
      />
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
