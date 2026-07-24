import PageHeader from '../components/PageHeader';
import ProductGrid from '../components/ProductGrid';
import Seo, { SITE_URL } from '../components/Seo';
import { donorChairs } from '../data/content';

export default function PortableBloodDonorChair() {
  return (
    <>
      <Seo
        title="Portable Blood Donor Chair | Customised Donor Chairs for Blood Camps"
        description="Customised, portable blood donor chairs designed for donor comfort and quick setup at blood donation camps and blood banks across India."
        keywords="portable blood donor chair, blood donor chair manufacturer, blood donation camp chair, donor couch India, blood bank furniture, folding blood donor chair"
        path="/portable-blood-donor-chair"
        breadcrumbs={[{ name: 'Portable Blood Donor Chair', path: '/portable-blood-donor-chair' }]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Portable Blood Donor Chairs',
          itemListElement: donorChairs.map((product, index) => ({
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
