
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <span className="text-white font-bold text-2xl">C</span>
              </div>
              <span className="text-2xl font-bold text-blue-900 tracking-tight">GRUPO CAREH</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Inicio</Link>
            <Link to="/cursos" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Cursos</Link>
            <Link to="/servicios" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Servicios</Link>
            <a href="#contacto" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Contáctanos
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-blue-600 focus:outline-none">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-6 space-y-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-slate-600 text-lg">Inicio</Link>
          <Link to="/cursos" onClick={() => setIsOpen(false)} className="block text-slate-600 text-lg">Cursos</Link>
          <Link to="/servicios" onClick={() => setIsOpen(false)} className="block text-slate-600 text-lg">Servicios</Link>
          <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold">Solicitar Información</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
