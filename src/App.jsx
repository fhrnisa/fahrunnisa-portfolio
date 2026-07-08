import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

//Works Pages
import WorksPage from './pages/Works/WorksPage';
import BeemathDetail from './pages/Works/Details/BeemathDetail';
import TrampahDetail from './pages/Works/Details/TrampahDetail';
import FacilitiesReportDetail from './pages/Works/Details/FacilitiesReportDetail';
import PrintServiceStationaryDetail from './pages/Works/Details/PrintServiceStationaryDetail';

//Lab Pages
import LabPage from './pages/Lab/LabPage';
import CloverTaskDetail from './pages/Lab/Details/CloverTaskDetail';
import DayFlowDetail from './pages/Lab/Details/DayFlowDetail';
import TrampahLogoDetail from './pages/Lab/Details/TrampahLogoDetail';
import BgmBeeMathDetail from './pages/Lab/Details/BgmBeemathDetail';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home'); 
  const renderPage = () => {
      switch (currentPage) {
        case "Home":
          return <HomeHero />;
        case "Works":
          return <Works />;
        case "Lab":
          return <Lab />;
        case "About":
          return <About />;
        default:
          return <HomeHero />;
      }
    };

  const [selectedProject, setSelectedProject] = useState(null);

  const navigateTo = (page, projectData = null) => {
    setCurrentPage(page);
    setSelectedProject(projectData);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#faf8f5]">
      
      {/* Navbar global dipanggil sekali di sini */}
      <Navbar activePage={currentPage} onNavigate={navigateTo} />

      {/* Area Konten Utama Secara Dinamis */}
      <main className="flex-grow">
        <Routes>
          {/* Halaman Utama / Router Utama */}
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/lab" element={<LabPage />} />

          {/* Halaman Detail Project Works */}
          <Route path="/works/beemath" element={<BeemathDetail />} />
          <Route path="/works/trampah" element={<TrampahDetail />} />
          <Route path="/works/facilitiesreport" element={<FacilitiesReportDetail />} />
          <Route path="/works/printservicestationary" element={<PrintServiceStationaryDetail />} />

          {/* Halaman Detail Project Lab */}
          <Route path="/lab/clovertask" element={<CloverTaskDetail />} />
          <Route path="/lab/dayflow" element={<DayFlowDetail />} />
          <Route path="/lab/trampahlogo" element={<TrampahLogoDetail />} />
          <Route path="/lab/beemathbgm" element={<BgmBeeMathDetail />} />

        </Routes>
      </main>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/628213306884?text=Hello%20Nisa,%20I%20would%20like%20to%20inquire%20about%20your%20services." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#128C7E] transition-all transform hover:scale-110 z-50 flex items-center justify-center"
      >
        <span className="font-bold text-sm px-1">Service Order</span>
      </a>

      {/* FOOTER */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}