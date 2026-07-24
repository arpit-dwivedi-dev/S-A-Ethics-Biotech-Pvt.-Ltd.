import Hero from '../sections/Hero';
import FeaturedProducts from '../sections/FeaturedProducts';
import GovernmentRegistration from '../sections/GovernmentRegistration';
import ChannelPartners from '../sections/ChannelPartners';
import Seo from '../components/Seo';

export default function Home() {
  return (
    <>
      <Seo
        title="SA Ethics Biotech | Blood Bank Equipment Manufacturer & Medical Device Supplier India"
        description="SA Ethics Biotech Pvt. Ltd. — ISO 9001:2015 & 13485:2016 certified manufacturer, importer/exporter of blood bank equipment and medical devices, including refrigerated centrifuges, plasma freezers, blood collection monitors and blood transportation boxes. Based in Delhi & Kanpur, India."
        keywords="blood bank equipment manufacturer India, medical device manufacturer Delhi, blood bank equipment supplier Kanpur, ISO 9001 certified medical device company, ISO 13485 certified manufacturer, refrigerated centrifuge, plasma freezer, blood collection monitor, blood transportation box, portable blood donor chair, blood bank equipment exporter, blood bank equipment importer India"
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'SA Ethics Biotech Pvt. Ltd.',
          url: 'https://www.saethicsbio.com/',
        }}
      />
      <Hero />
      <FeaturedProducts />
      <GovernmentRegistration />
      <ChannelPartners />
    </>
  );
}
