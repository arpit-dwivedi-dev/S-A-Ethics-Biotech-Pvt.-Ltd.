import PageHeader from '../components/PageHeader';
import ProductGrid from '../components/ProductGrid';
import Seo, { SITE_URL } from '../components/Seo';
import { transportationBoxes } from '../data/content';

export default function MobileBloodTransportationBox() {
  return (
    <>
      <Seo
        title="Mobile Blood Transportation Box | 8L–75L Blood Transport Boxes"
        description="Rugged, temperature-controlled blood transportation boxes in 8L, 15L, 50L & 75L capacities — built to keep blood and plasma safely within range from collection point to storage."
        keywords="blood transportation box, mobile blood transport box, refrigerated blood transport box, blood bank cooler box, blood transport box manufacturer India, portable blood cooler, blood bag carrier box"
        path="/mobile-blood-transportation-box"
        breadcrumbs={[{ name: 'Mobile Blood Transportation Box', path: '/mobile-blood-transportation-box' }]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Mobile Blood Transportation Boxes',
          itemListElement: transportationBoxes.map((product, index) => ({
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
