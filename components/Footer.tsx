
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2 space-y-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">GRUPO CAREH</span>
          </Link>
          <p className="max-w-sm text-lg leading-relaxed">
            Líderes en formación de personal de salud y cuidados de enfermería domiciliaria. Comprometidos con la excelencia y la capacitación práctica.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/profile.php?id=100092997405365" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all cursor-pointer text-white"
              title="Síguenos en Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-pink-600 transition-all cursor-pointer text-white">
              <span className="uppercase text-xs font-bold">IG</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg">Enlaces Rápidos</h4>
          <nav className="flex flex-col gap-4">
            <Link to="/" className="hover:text-blue-400 transition-colors">Inicio</Link>
            <Link to="/cursos" className="hover:text-blue-400 transition-colors">Catálogo de Cursos</Link>
            <Link to="/servicios" className="hover:text-blue-400 transition-colors">Enfermería</Link>
            <a href="#contacto" className="hover:text-blue-400 transition-colors">Contáctanos</a>
          </nav>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg">Legal</h4>
          <nav className="flex flex-col gap-4 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Libro de Reclamaciones</a>
          </nav>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium uppercase tracking-widest">
        <p>© 2024 GRUPO CAREH. Todos los derechos reservados.</p>
        <p>Expertos en Salud y Educación</p>
      </div>
    </footer>
  );
};

export default Footer;
