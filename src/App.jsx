// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import LabPage from './pages/Lab/LabPage';
import WorksPage from './pages/Works/WorksPage';
import CloverTaskDetail from './pages/Lab/Details/ClovertaskDetail';

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
        {currentPage === 'Home' && <Home onNavigate={navigateTo} />}
        {currentPage === 'Works' && <WorksPage onNavigate={navigateTo} />} {/* Mengarah ke Home jika Works & Home digabung */}
        {currentPage === 'About' && <About onNavigate={navigateTo} />}
        {currentPage === 'Lab' && <LabPage onNavigate={navigateTo} />}
        {currentPage === 'Contact' && <Contact onNavigate={navigateTo} />}

        {currentPage === 'LabDetail' && <CloverTaskDetail onNavigate={navigateTo} />}
      </main>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/628xxxxxxxxxx" 
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