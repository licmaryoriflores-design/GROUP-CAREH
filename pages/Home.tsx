
import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES, SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 bg-blue-500/30 border border-blue-400/50 rounded-full text-blue-200 text-sm font-semibold tracking-wider uppercase">
              Capacitación & Salud Profesional
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Cuidando tu <span className="text-blue-400">Salud</span>, Formando <span className="text-emerald-400">Líderes</span>
            </h1>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto lg:mx-0">
              Somos GRUPO CAREH. Ofrecemos servicios de enfermería especializados y cursos de alta demanda para estudiantes y profesionales de la salud.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <Link to="/cursos" className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl shadow-white/10 text-center">
                Ver Cursos
              </Link>
              <Link to="/servicios" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all border border-blue-400/30 text-center">
                Servicios de Enfermería
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="bg-gradient-to-tr from-blue-400 to-emerald-400 w-96 h-96 rounded-full absolute -top-10 -right-10 blur-3xl opacity-20 animate-pulse"></div>
            <img 
              src="https://picsum.photos/seed/nursing/600/600" 
              alt="Medical Team" 
              className="rounded-3xl shadow-2xl relative z-20 border-8 border-white/5"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white p-12 rounded-[2rem] shadow-xl shadow-slate-200 border border-slate-100">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600">500+</h3>
            <p className="text-slate-500 font-medium">Alumnos Graduados</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600">15+</h3>
            <p className="text-slate-500 font-medium">Cursos Activos</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600">1k+</h3>
            <p className="text-slate-500 font-medium">Atenciones en Casa</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600">100%</h3>
            <p className="text-slate-500 font-medium">Certificado</p>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Cursos Destacados</h2>
            <p className="text-slate-600">Potencia tu carrera con nuestros talleres prácticos.</p>
          </div>
          <Link to="/cursos" className="hidden sm:block text-blue-600 font-bold hover:underline">Ver todos los cursos →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {COURSES.slice(0, 3).map(course => (
            <div key={course.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100 flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">{course.category}</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2 flex-1">{course.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-xs font-medium flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {course.duration}
                  </span>
                  <Link 
                    to={`/cursos/${course.id}`}
                    className="bg-slate-50 text-blue-600 font-bold px-4 py-2 rounded-xl text-sm group-hover:bg-blue-600 group-hover:text-white transition-all"
                  >
                    Más Información
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-slate-100 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">Nuestros Servicios de Enfermería</h2>
            <p className="text-slate-600 text-lg">Brindamos cuidados de alta calidad con calidez humana y profesionalismo en el entorno más seguro: su hogar.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {SERVICES.map(service => (
              <div key={service.id} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-start hover:-translate-y-2 transition-transform">
                <div className="text-5xl mb-8">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8">{service.description}</p>
                <ul className="space-y-3 mt-auto">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                      <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white grid lg:grid-cols-2 gap-16 items-center shadow-2xl shadow-blue-300">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold leading-tight">¿Listo para dar el siguiente paso en tu formación?</h2>
            <p className="text-blue-100 text-lg">Déjanos tus datos y un asesor se pondrá en contacto contigo para resolver todas tus dudas sobre matriculación o servicios de salud.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500 p-3 rounded-2xl">📞</div>
                <div>
                  <p className="text-sm text-blue-200">Llámanos</p>
                  <p className="text-xl font-bold">+51 987 654 321</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-500 p-3 rounded-2xl">📧</div>
                <div>
                  <p className="text-sm text-blue-200">Email</p>
                  <p className="text-xl font-bold">info@grupocareh.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
            <form className="space-y-4">
              <input type="text" placeholder="Nombre completo" className="w-full bg-white/10 border-white/20 text-white placeholder:text-blue-200 rounded-xl px-5 py-3 focus:ring-2 focus:ring-blue-400 outline-none" />
              <input type="email" placeholder="Correo electrónico" className="w-full bg-white/10 border-white/20 text-white placeholder:text-blue-200 rounded-xl px-5 py-3 focus:ring-2 focus:ring-blue-400 outline-none" />
              <select className="w-full bg-white/10 border-white/20 text-blue-900 placeholder:text-blue-200 rounded-xl px-5 py-3 focus:ring-2 focus:ring-blue-400 outline-none appearance-none">
                <option value="" className="text-slate-900">Interés en...</option>
                <option value="curso" className="text-slate-900">Cursos de Salud</option>
                <option value="enfermeria" className="text-slate-900">Servicios de Enfermería</option>
              </select>
              <textarea placeholder="Mensaje" rows={4} className="w-full bg-white/10 border-white/20 text-white placeholder:text-blue-200 rounded-xl px-5 py-3 focus:ring-2 focus:ring-blue-400 outline-none"></textarea>
              <button className="w-full bg-white text-blue-600 font-bold py-4 rounded-xl hover:bg-blue-50 transition-all shadow-lg">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
