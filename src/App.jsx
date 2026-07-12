import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollButtons'; 
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

  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
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
          <Route path="/works/facilities-improvement-report" element={<FacilitiesReportDetail />} />
          <Route path="/works/print-service-stationery" element={<PrintServiceStationaryDetail />} />

          {/* Halaman Detail Project Lab */}
          <Route path="/lab/clover-task" element={<CloverTaskDetail />} />
          <Route path="/lab/dayflow-ai" element={<DayFlowDetail />} />
          <Route path="/lab/trampah-logo" element={<TrampahLogoDetail />} />
          <Route path="/lab/beemath-bgm" element={<BgmBeeMathDetail />} />
        </Routes>
      </main>

    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* SCROLL TO TOP / BOTTOM BUTTONS */}
      <ScrollToTop />

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/628213306884?text=Hello%20Nisa,%20I%20would%20like%20to%20inquire%20about%20your%20services." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#128C7E] transition-all transform hover:scale-110 z-50 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.892.526 3.741 1.522 5.353L2 22l4.769-1.505A9.953 9.953 0 0 0 12.001 22C17.523 22 22 17.522 22 12S17.523 2 12.001 2zm0 18.148a8.096 8.096 0 0 1-4.135-1.132l-.297-.176-3.06.966.986-3.033-.192-.31A8.11 8.11 0 0 1 3.85 12c0-4.494 3.657-8.15 8.151-8.15 4.494 0 8.15 3.656 8.15 8.15 0 4.494-3.656 8.148-8.15 8.148z"/>
        </svg>
      </a>
    </div>

      {/* FOOTER */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}