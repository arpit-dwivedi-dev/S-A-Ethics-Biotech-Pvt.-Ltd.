import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Directors from './pages/Directors';
import AboutUs from './pages/AboutUs';
import BloodBankEquipment from './pages/BloodBankEquipment';
import MobileBloodTransportationBox from './pages/MobileBloodTransportationBox';
import PortableBloodDonorChair from './pages/PortableBloodDonorChair';
import PhotoGallery from './pages/PhotoGallery';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/directors" element={<Directors />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blood-bank-equipment" element={<BloodBankEquipment />} />
        <Route path="/mobile-blood-transportation-box" element={<MobileBloodTransportationBox />} />
        <Route path="/portable-blood-donor-chair" element={<PortableBloodDonorChair />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

export default App;
