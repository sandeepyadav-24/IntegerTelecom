// src/App.jsx
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home'
import TelecomServices from "./components/TelecomServices"
import IntegerTelecomAbout from "./components/IntegerTelecomAbout"
import WirelessServices from "./components/WirelessServices"
import FiberEngineering from "./components/FiberEngineering"
import DataCenterInstallation from "./components/DataCenterInstallation"
import DroneTowerAudits from "./components/DroneTowerAudits"
import ChipsetDeviceTesting from "./components/ChipsetDeviceTesting"
import ContactUs from "./components/ContactUs"
import Navbar from './components/Navbar'
import Footer from './components/Footer';

function App() {
 

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<IntegerTelecomAbout />} />
        <Route path="/services" element={<TelecomServices />} />
        <Route path="/services/chipset-testing" element={<ChipsetDeviceTesting />} />
        <Route path="/services/drone-tower-audit" element={<DroneTowerAudits />} />
        <Route path="/services/data-center-installation" element={<DataCenterInstallation />} />
        <Route path="/services/fiber-engineering" element={<FiberEngineering />} />
        <Route path="/services/wireless-services" element={<WirelessServices />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App