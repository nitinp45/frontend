import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './component/Navbar';
import { Home } from './component/Home';
import { AboutUs } from './component/AboutUs';
import { Footer } from './component/Footer';
import { ContactUs } from './component/ContactUs';
import { Login } from './component/Login';
import { Register } from './component/Register';
import { FAQ } from './component/FAQ';
import { WasteContributorForm } from './component/WasteContributorForm';
import { ProducerForm } from './component/ProducerForm';
import { AdminDashBoard } from './component/Admin/AdminDashBoard';
import {BiogasProducerPage} from "./component/BiogasProducerPage";
import {QRPaymentPage} from "./component/QRPaymentPage";
import {WasteContributorPage} from "./component/WasteContributorPage";

function App() {
  return (
    <Router>
      <div className="bg-white">
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />

          {/* User & Contributor Routes */}
          <Route path="/wasteform" element={<WasteContributorForm />} />
          <Route path="/producerform" element={<ProducerForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/biogas" element={<BiogasProducerPage />} />
          <Route path="/qr-payment" element={<QRPaymentPage />} />
          <Route path="/wastecontributor" element={<WasteContributorPage />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashBoard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
