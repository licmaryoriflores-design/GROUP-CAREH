
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold text-slate-900 leading-tight">Enfermería con Corazón en tu Hogar</h1>
          <p className="text-slate-600 text-lg">
            En GRUPO CAREH entendemos que no hay lugar como el hogar para recuperarse. Nuestro personal está capacitado para brindar atenciones de alta complejidad con la empatía que usted merece.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-2xl">
              <div className="text-3xl mb-4">✅</div>
              <h4 className="font-bold mb-2">Personal Titulado</h4>
              <p className="text-sm text-slate-500">Enfermeros licenciados y técnicos colegiados.</p>
            </div>
            <div className="p-6 bg-emerald-50 rounded-2xl">
              <div className="text-3xl mb-4">🕒</div>
              <h4 className="font-bold mb-2">Atención 24/7</h4>
              <p className="text-sm text-slate-500">Estamos listos para atenderle en cualquier horario.</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="https://picsum.photos/seed/homecare/800/600" alt="Atención domiciliaria" className="rounded-[3rem] shadow-2xl relative z-10" />
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl z-20 border border-slate-100 max-w-xs">
            <div className="flex gap-1 text-yellow-400 mb-2">★★★★★</div>
            <p className="text-sm font-medium text-slate-600">"La atención que brindaron a mi abuelo fue excepcional. Profesionales muy humanos."</p>
            <p className="text-xs text-slate-400 mt-2 font-bold">— Familia Ramírez</p>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <h2 className="text-3xl font-bold text-center">Nuestros Servicios Detallados</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map(service => (
            <div key={service.id} className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-50">
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8">{service.description}</p>
              <div className="space-y-3">
                {service.benefits.map((b, i) => (
                  <div key={i} className="flex gap-3 text-sm text-slate-500">
                    <span className="text-blue-500">•</span>
                    {b}
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">Cotizar Servicio</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
