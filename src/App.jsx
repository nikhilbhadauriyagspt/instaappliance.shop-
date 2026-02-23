import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ServiceDetails from './pages/ServiceDetails';
import BlogDetails from './pages/BlogDetails';
import WashingMachineRepair from './pages/services/WashingMachineRepair';
import RefrigeratorRepair from './pages/services/RefrigeratorRepair';
import DishwasherRepair from './pages/services/DishwasherRepair';
import TelevisionRepair from './pages/services/TelevisionRepair';
import CoffeeMakerRepair from './pages/services/CoffeeMakerRepair';
import OtherAppliances from './pages/services/OtherAppliances';
import AirConditionerRepair from './pages/services/AirConditionerRepair';
import MicrowaveOvenRepair from './pages/services/MicrowaveOvenRepair';
import OvenStoveRepair from './pages/services/OvenStoveRepair';
import WaterPurifierRepair from './pages/services/WaterPurifierRepair';
import ClothesDryerRepair from './pages/services/ClothesDryerRepair';
import KitchenChimneyRepair from './pages/services/KitchenChimneyRepair';
import PrivacyPolicy from './pages/policies/PrivacyPolicy';
import TermsOfService from './pages/policies/TermsOfService';
import RefundPolicy from './pages/policies/RefundPolicy';
import CookiePolicy from './pages/policies/CookiePolicy';
import Disclaimer from './pages/policies/Disclaimer';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import { BookingProvider } from './context/BookingContext';
import BookingModal from './components/modals/BookingModal';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminPath && <Header />}
      {!isAdminPath && <BookingModal />}
      <main>{children}</main>
      {!isAdminPath && <Footer />}
    </>
  );
};

function App() {
  return (
    <BookingProvider>
      <Router>
        <ScrollToTop />
        <div className="App overflow-x-hidden">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/service/washing-machine" element={<WashingMachineRepair />} />
              <Route path="/service/refrigerator" element={<RefrigeratorRepair />} />
              <Route path="/service/dishwasher" element={<DishwasherRepair />} />
              <Route path="/service/television" element={<TelevisionRepair />} />
              <Route path="/service/coffee-maker" element={<CoffeeMakerRepair />} />
              <Route path="/service/other-appliances" element={<OtherAppliances />} />
              <Route path="/service/air-conditioner" element={<AirConditionerRepair />} />
              <Route path="/service/microwave-oven" element={<MicrowaveOvenRepair />} />
              <Route path="/service/oven-stove" element={<OvenStoveRepair />} />
              <Route path="/service/water-purifier" element={<WaterPurifierRepair />} />
              <Route path="/service/clothes-dryer" element={<ClothesDryerRepair />} />
              <Route path="/service/kitchen-chimney" element={<KitchenChimneyRepair />} />
              <Route path="/service/:id" element={<ServiceDetails />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App;
