export const company = {
  legalName: 'S A Ethics Biotech Pvt. Ltd.',
  parentEntity: 'SA-Ethics Bio & Consultancy Services LLP',
  description:
    'SA-Ethics is a professional trader (import & export), manufacturer of medical devices, and establisher of high-quality modern blood banks.',
  principle: 'Being honest, doing things with sincerity.',
  tenet:
    'Quality products, based on domestic and facing the world. Quality first, excellence, integrity-based, customer first.',
  goal: 'Innovating continuously and going global.',
  mcaRegistration: 'AAL-5895',
};

export const aboutContent = {
  intro: [
    'SA-Ethics is a professional Trader (import & export), Manufacturer of Medical Devices and Establisher of high quality modern Blood Bank. The company’s founder has been involved in the medical industry for a very long while, focusing on health and protecting the sentient beings. We always follow the principle of "Being Honest, doing things with sincerity" and work hard on it. Since it’s establishment, the company has always adhered to a core concept.',
    'SA Ethics: quality products, based on domestic and facing the world. Quality first, excellence, integrity based, customer first is the company’s service tenet. Innovating continuously and going global is the company’s goal. The company has been aggressive in the globalization of the market, continuously creating outstanding performance and has achieved rapid development.',
    'The Company incorporated with Ministry of Corporate Affairs (MCA), Delhi, India, Vide No. AAL-5895, having its registered office at C-52, Ist Floor, DSIIDC Community Work Centre, Kalyanpuri Delhi – 110091 and corporate office at Shri Bala ji Market, 128/609 A, Shop No. 9&10, Y-Block, Kidwai Nagar, Kanpur-208011, Uttar Pradesh. SA-Ethics is ISO 9001:2015 & 13485:2016 certified company.',
    'SA Ethics is associated with A-Sky Instruments, factory situated at Plot No. F-271B, Road No. – 13 VKIA, Jaipur- 302013 (Rajasthan) to introduce advance technology and management experience through transformation, and develop professionally the concept of excellence. Productions: Micro Controller based Refrigerated centrifuge, Micro Controller based Vertical Plasma Freezer, Blood Collection Monitor, Automatic Blood Donor, Micro Controller based platelet Incubator, Agitator, etc. The level of quality, stability, hard work, its product technology is mature, advanced performance, in many years of product market application has many users alike.',
    'S A Ethics has also established more than 50 State-Of-The-Art Charitable & Hospital based blood banks across India including Indian Medical Association and Rotary Blood Bank and giving the consultancy time to time as per their need, also provide consultancy to the major blood banks across pan India.',
    'We design to enable a better care experience in blood bank equipment, Refrigerated Blood Transportation Box and Customized Portable Blood Donor Chairs. We continue to show our promise of customer satisfaction while designing and customized blood equipment & health care products with the highest quality, in the most cost-effective way.',
    'Our Research & development team (India & abroad) work hard to continually develop new products in addition to implementing product improvements for our existing products. We are able to develop customize blood bank products for customer as per their needs.',
  ],
  vision: 'SA Ethics is committed to manufacture and delivery standard and high quality blood bank instruments with prompt service and on time delivery to our customers.',
  whoWeAre: 'SA Ethics is a leading blood bank establishment, blood bank equipment, regents & accessories supplier/manufacture based in India. We try to keep up our standard of quality while providing innovative equipment and design. SA Ethics is an ISO certified company.',
  mission: 'It is to provide a safe and adequate supply of blood bank equipment & Medical health care and related services.',
};

export const stats = [
  { value: '2', label: 'ISO Certifications' },
  { value: '20+', label: 'Product Lines' },
  { value: '3', label: 'Facilities' },
  { value: '50+', label: 'Blood Banks Established' },
];

export const certifications = [
  { code: 'ISO 9001:2015', label: 'Quality Management Systems' },
  { code: 'ISO 13485:2016', label: 'Medical Devices Quality Management' },
];

export const offices = [
  {
    label: 'Registered Office',
    lines: ['C-52, Ist Floor, DSIIDC Community Work Centre,', 'Kalyanpuri, Delhi – 110091'],
  },
  {
    label: 'Corporate Office',
    lines: [
      'Shri Bala Ji Market, 128/609 A, Shop No. 9 & 10,',
      'Y-Block, Kidwai Nagar, Kanpur – 208011, Uttar Pradesh',
    ],
  },
  {
    label: 'Manufacturing Partner — A-Sky Instruments',
    lines: ['Plot No. F-271B, Road No. 13, VKIA,', 'Jaipur – 302013, Rajasthan'],
  },
];

export const contact = {
  email: 'info@saethicsbio.com',
  phones: [
    { number: '+91 88105 51362', whatsapp: true },
    { number: '+91 93894 08069', whatsapp: false },
    { number: '+91 96436 55930', whatsapp: false },
  ],
  whatsappLink: 'https://wa.me/918810551362',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.510357336545!2d77.31235565112672!3d28.614462482338734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4c15b256ac7%3A0x9ed7c067b8d3809d!2sDSIDC%20Complex%2C%20Block%2015%2C%20Mayur%20Vihar%2C%20Delhi%2C%20110091!5e0!3m2!1sen!2sin!4v1573021351440!5m2!1sen!2sin',
};

export type GovRegistration = {
  image: string;
  title: string;
  detail: string;
};

export const governmentRegistrations: GovRegistration[] = [
  {
    image: '/assets/certs/dgft-iec.png',
    title: 'Directorate General of Foreign Trade',
    detail: 'IEC No.: ADOFS6935K',
  },
  {
    image: '/assets/certs/iso-13485-riclgeac.png',
    title: 'ISO 13485:2016 Certified',
    detail: 'PAC-GEAC-1506-299',
  },
  {
    image: '/assets/certs/iso-9001-riclUAF.png',
    title: 'ISO 9001:2015 Certified',
    detail: 'Accreditation No. 51708260106 (QMS)',
  },
  {
    image: '/assets/certs/drug-license.png',
    title: 'Drug Control Department, Govt. of NCT of Delhi',
    detail: 'DL-KON-129349/50',
  },
];

export type ChannelPartner = {
  image: string;
  name: string;
};

export const channelPartners: ChannelPartner[] = [
  { image: '/assets/certs/partner-tesonic.png', name: 'TeSonic' },
  { image: '/assets/certs/partner-athenese.png', name: 'Athenese Dx' },
  { image: '/assets/certs/partner-top-medical.png', name: 'TOP Medical' },
];

export type CatalogProduct = {
  name: string;
  image: string;
};

export const bloodBankEquipment: CatalogProduct[] = [
  { name: 'Alta Elisa Incu-Shaker ADX-130', image: '/assets/products/alta-elisa-incu-shaker-adx-130.jpg' },
  { name: 'Alta Elisa Washer ADX-120', image: '/assets/products/alta-elisa-washer-adx-120.jpg' },
  { name: 'Alta Elisa Reader ADX-110', image: '/assets/products/alta-elisa-reader-adx-110.jpg' },
  { name: 'Cryo Freezer', image: '/assets/products/cryo-freezer.jpg' },
  { name: 'Platelet Incubator With Agitator', image: '/assets/products/platelet-incubator-double.jpg' },
  { name: 'Automatic Donor Couch', image: '/assets/products/automatic-donor-couch.jpg' },
  { name: 'Plasma Thawing Bath', image: '/assets/products/plasma-thawing-bath.jpg' },
  { name: 'Refrigerated Centrifuge Micro Controller', image: '/assets/products/refrigerated-centrifuge-1.jpg' },
  { name: 'Refrigerated Centrifuge PLC Controller', image: '/assets/product-refrigerated-centrifuge.jpg' },
  { name: 'Cryo Bath', image: '/assets/products/cryo-bath.jpg' },
  { name: 'Laminar Air Flow Bench', image: '/assets/products/laminar-air-flow-bench.jpg' },
  { name: 'Plasma Extractor', image: '/assets/products/plasma-expressor.jpg' },
  { name: 'Double Pan Balance', image: '/assets/products/double-pan-balance.jpg' },
  { name: 'Single Pan Balance', image: '/assets/products/single-pan-balance.jpg' },
  { name: 'Central Monitoring System – Data Logger', image: '/assets/products/data-logger.jpg' },
  { name: 'Plasma Freezer', image: '/assets/product-plasma-freezer.jpg' },
];

export const transportationBoxes: CatalogProduct[] = [
  { name: 'Blood Transportation Box 8L', image: '/assets/products/8l.jpg' },
  { name: 'Blood Transportation Box 15L', image: '/assets/products/15l.jpg' },
  { name: 'Blood Transportation Box 50L', image: '/assets/products/50l.jpg' },
  { name: 'Blood Transportation Box 75L', image: '/assets/products/75l.jpg' },
];

export const donorChairs: CatalogProduct[] = [
  { name: 'Portable Blood Donor Chair', image: '/assets/products/portable-blood-donor-chair.jpg' },
];

export type FeaturedProduct = {
  name: string;
  image: string;
  href: string;
};

export const featuredProducts: FeaturedProduct[] = [
  { name: 'Refrigerated Centrifuge PLC', image: '/assets/product-refrigerated-centrifuge.jpg', href: '/blood-bank-equipment' },
  { name: 'Blood Collection Monitor', image: '/assets/product-blood-collection-monitor.jpg', href: '/blood-bank-equipment' },
  { name: 'Cryo Freezer', image: '/assets/products/cryo-freezer.jpg', href: '/blood-bank-equipment' },
  { name: 'Automatic Donor Couch', image: '/assets/products/automatic-donor-couch.jpg', href: '/blood-bank-equipment' },
  { name: 'Blood Bank Refrigerator', image: '/assets/product-blood-bank-refrigerator.jpg', href: '/blood-bank-equipment' },
  { name: 'Analytical Instruments', image: '/assets/products/double-pan-balance.jpg', href: '/blood-bank-equipment' },
  { name: 'Blood Transportation Box', image: '/assets/product-portable-coolers.jpg', href: '/mobile-blood-transportation-box' },
  { name: 'Portable Blood Donor Chair', image: '/assets/products/portable-blood-donor-chair.jpg', href: '/portable-blood-donor-chair' },
];

export type Director = {
  name: string;
  title: string;
  image: string;
  bio: string[];
  highlights?: string[];
  link?: string;
};

export const directors: Director[] = [
  {
    name: 'Sanjay K. Tripathi',
    title: 'Managing Director',
    image: '/assets/directors/sanjay-tripathi.jpg',
    bio: [
      '“Nobody can do everything, but everybody can do something” — this is the motto of Rtn. Sanjay with Yagya Charitable Blood Bank, a venture of Yagya Sewa Sasthan. His agenda is to fulfill every blood request by making every eligible individual a voluntary blood donor.',
      'Rtn. Sanjay K. Tripathi, a dignitary in the field of Blood Banking, is associated with many social organizations and trusts, sits on the panel of various charitable blood banks, and is an Executive Proud Rotarian of Rotary Club of Kanpur West (the biggest NGO of the world, catering its services round the clock in the interest of humanity). He has been a forerunner as:',
    ],
    highlights: [
      'A member of International Society of Blood Transfusion, Amsterdam, Netherlands',
      'President: Yagya Sewa Sansthan',
      'Managing Trustee: Yagya Charitable Blood Bank',
      'Technical Advisor: IMA Charitable Blood Bank, Kanpur',
      'Technical Advisor: Rotary Noida Blood Bank, Noida',
    ],
    link: 'http://sanjaytripathi.com/',
  },
  {
    name: 'Ankita Tripathi',
    title: 'Director',
    image: '/assets/directors/ankita-tripathi.jpg',
    bio: ['Ankita Tripathi is a public-spirited businesswoman. She firmly believes that “You do not need a reason to help people”.'],
  },
  {
    name: 'Aman Tripathi',
    title: 'Executive Director',
    image: '/assets/directors/aman-tripathi.jpg',
    bio: [
      'Aman Tripathi is a heretic and charismatic youth who is pursuing his B.E. in Naval Architecture and Offshore Engineering, while simultaneously subserving his company by working towards its globalization.',
      '“The earlier you start, the more time you have to mess up” — is his belief and source of motivation in life.',
    ],
  },
];

export type VisitPhoto = {
  image: string;
  caption: string;
};

export const factoryVisits: VisitPhoto[] = [
  {
    image: '/assets/visit-foshan-alpicool-reception.jpg',
    caption: 'Visiting Foshan Alpicool Electric Appliance Co., Ltd.',
  },
  {
    image: '/assets/visit-meeting-office-2.jpg',
    caption: 'Partnership review meeting',
  },
  {
    image: '/assets/visit-meeting-office-1.jpg',
    caption: 'Partnership review meeting',
  },
  {
    image: '/assets/visit-centrifuge-demo.jpg',
    caption: 'Centrifuge quality demonstration with the production team',
  },
  {
    image: '/assets/visit-jidi-office-meeting.jpg',
    caption: 'Sourcing discussion at JIDI Instruments',
  },
  {
    image: '/assets/visit-jidi-warehouse.jpg',
    caption: 'Manufacturing floor walkthrough — JIDI Instruments',
  },
  {
    image: '/assets/visit-factory-floor.jpg',
    caption: 'On the production line',
  },
];

export type GalleryPhoto = {
  image: string;
  caption: string;
};

export const conferenceGallery: GalleryPhoto[] = [
  { image: '/assets/gallery/gallery-1.jpg', caption: 'Showcasing equipment at an international medical trade show' },
  { image: '/assets/gallery/gallery-2.jpg', caption: '36th International Congress of the ISBT, Barcelona 2020' },
  { image: '/assets/gallery/gallery-3.jpg', caption: 'With Thermo Scientific at a blood-processing technology expo' },
];

export type NavChild = { label: string; to: string };
export type NavItem = { label: string; to?: string; children?: NavChild[] };

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'Profile',
    children: [
      { label: 'Directors', to: '/directors' },
      { label: 'About Us', to: '/about-us' },
    ],
  },
  {
    label: 'Products',
    children: [
      { label: 'Blood Bank Equipment', to: '/blood-bank-equipment' },
      { label: 'Mobile Blood Transportation Box', to: '/mobile-blood-transportation-box' },
      { label: 'Portable Blood Donor Chair', to: '/portable-blood-donor-chair' },
      { label: 'Other', to: '/' },
    ],
  },
  { label: 'Photo Gallery', to: '/photo-gallery' },
  { label: 'Contact Us', to: '/contact-us' },
];

export const quickLinks: NavChild[] = [
  { label: 'Directors', to: '/directors' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Blood Bank Equipment', to: '/blood-bank-equipment' },
  { label: 'Mobile Blood Transportation Box', to: '/mobile-blood-transportation-box' },
  { label: 'Portable Blood Donor Chair', to: '/portable-blood-donor-chair' },
];
