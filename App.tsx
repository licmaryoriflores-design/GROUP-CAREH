
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HealthAssistant from './components/HealthAssistant';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Services from './pages/Services';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Courses />} />
            <Route path="/servicios" element={<Services />} />
          </Routes>
        </main>
        <Footer />
        <HealthAssistant />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
