
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../constants';

const Courses: React.FC = () => {
  const [filter, setFilter] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  const categories = ['Todos', 'Urgencias y Cuidados Críticos', 'Procedimientos Invasivos'];

  const filteredCourses = useMemo(() => {
    return COURSES.filter(course => {
      const matchesFilter = filter === 'Todos' || course.category === filter;
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            course.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-5xl font-bold text-slate-900">Nuestras Capacitaciones</h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Formación práctica de alta demanda diseñada para el éxito en el entorno hospitalario.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
        {/* Search Bar */}
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Buscar curso o tema (ej: ECG, Sondas...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none shadow-sm transition-all"
          />
          <svg className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                filter === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'Todos' ? 'Todos los Cursos' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Results */}
      {filteredCourses.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col group hover:-translate-y-1 transition-all duration-300">
              <div className="h-52 relative overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-blue-600 px-4 py-1.5 rounded-xl text-xs font-bold shadow-sm">{course.category}</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">{course.title}</h3>
                <p className="text-slate-500 text-sm mb-8 flex-1 leading-relaxed">{course.description}</p>
                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Duración</span>
                    <span className="text-slate-700 font-bold">{course.duration}</span>
                  </div>
                  <Link 
                    to={`/cursos/${course.id}`}
                    className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 text-center"
                  >
                    Más Información
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-slate-300">
          <div className="text-6xl mb-6">🔍</div>
          <h3 className="text-2xl font-bold text-slate-800">No encontramos cursos</h3>
          <p className="text-slate-500 mt-2">Intenta con otros términos o cambia la categoría de búsqueda.</p>
          <button onClick={() => {setSearchTerm(''); setFilter('Todos');}} className="mt-8 text-blue-600 font-bold hover:underline">Ver todo el catálogo</button>
        </div>
      )}
    </div>
  );
};

export default Courses;
