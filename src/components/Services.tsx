import { useState } from "react";
import SectionHeader from "./SectionHeader";

const categories = [
  {
    id: "esteticos",
    label: "✨ Estéticos Corporales",
    services: [
      { name: "Maderoterapia", problem: "Celulitis, grasa localizada, piel de naranja, modelado corporal", duration: "45–60 min", price: "55–80 €", demand: 98, star: true },
      { name: "Masaje Reductor", problem: "Reducción de medidas, moldear silueta (abdomen, piernas, glúteos)", duration: "50–60 min", price: "55–75 €", demand: 85 },
      { name: "Drenaje Linfático", problem: "Retención de líquidos, hinchazón, postoperatorios, piernas pesadas", duration: "60–75 min", price: "60–90 €", demand: 90 },
      { name: "Masaje Anticelulítico", problem: "Celulitis, mala circulación, firmeza de piel", duration: "45–60 min", price: "50–70 €", demand: 82 },
      { name: "Masaje con Ventosas", problem: "Descontracturar, mejorar circulación, celulitis superficial", duration: "45 min", price: "50–65 €", demand: 75 },
    ],
  },
  {
    id: "terapeuticos",
    label: "🌿 Terapéuticos y Relajación",
    services: [
      { name: "Masaje Descontracturante", problem: "Contracturas, tensión muscular, dolor de espalda/cuello", duration: "50–60 min", price: "55–75 €", demand: 88 },
      { name: "Masaje Relajante / Sueco", problem: "Estrés, ansiedad, tensión general", duration: "60 min", price: "50–70 €", demand: 80 },
      { name: "Masaje Prenatal", problem: "Dolores lumbar, piernas, hinchazón en embarazo", duration: "45–60 min", price: "55–75 €", demand: 72 },
      { name: "Reflexología Podal", problem: "Cansancio, estrés, dolores en pies", duration: "45 min", price: "45–65 €", demand: 65 },
      { name: "Masaje Postparto", problem: "Recuperación física, drenaje, relajación", duration: "60 min", price: "60–80 €", demand: 78 },
    ],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("esteticos");
  const [hovered, setHovered] = useState<string | null>(null);

  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <section id="servicios" className="py-16">
      <SectionHeader
        number="03"
        emoji="💆"
        title="Catálogo de Servicios"
        subtitle="10 servicios de alta demanda, ordenados por potencial de mercado"
      />

      {/* Star service callout */}
      <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl p-6 sm:p-8 text-white mb-8 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="text-5xl">⭐</div>
          <div className="flex-1">
            <div className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">Servicio Estrella</div>
            <h3 className="text-2xl font-extrabold mb-2">Maderoterapia</h3>
            <p className="text-amber-100 text-sm leading-relaxed">
              Técnica con rodillos y tablas de madera. Reduce celulitis, modela el cuerpo, mejora circulación.
              Se recomienda un ciclo de <strong className="text-white">~15 sesiones</strong>, lo que garantiza
              <strong className="text-white"> recurrencia de clientes</strong>.
              Alto potencial viral por sus resultados visuales.
            </p>
          </div>
          <div className="text-center bg-white/20 rounded-2xl p-4 min-w-[100px]">
            <div className="text-2xl font-extrabold">15</div>
            <div className="text-xs opacity-80">sesiones/ciclo</div>
            <div className="text-xs mt-1">= fidelización</div>
          </div>
        </div>
      </div>

      {/* Category tabs */}
      <div className="flex gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 ${
              activeTab === cat.id
                ? "bg-rose-500 text-white shadow-lg"
                : "bg-white text-gray-600 border border-gray-200 hover:border-rose-300"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Services list */}
      <div className="space-y-3">
        {activeCategory.services.map((svc) => (
          <div
            key={svc.name}
            onMouseEnter={() => setHovered(svc.name)}
            onMouseLeave={() => setHovered(null)}
            className={`bg-white rounded-2xl p-5 border-2 transition-all duration-200 cursor-pointer ${
              hovered === svc.name ? "border-rose-300 shadow-md" : "border-transparent shadow-sm"
            } ${svc.star ? "ring-2 ring-amber-300" : ""}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-gray-900">{svc.name}</h4>
                  {svc.star && (
                    <span className="text-xs bg-amber-100 text-amber-700 font-bold px-2 py-0.5 rounded-full">
                      ⭐ ESTRELLA
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-3">{svc.problem}</p>
                {/* Demand bar */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 w-16">Demanda</span>
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-rose-400 to-pink-500 transition-all duration-500"
                      style={{ width: `${svc.demand}%` }}
                    />
                  </div>
                  <span className="text-xs font-bold text-rose-600">{svc.demand}%</span>
                </div>
              </div>
              <div className="flex sm:flex-col gap-3 sm:gap-1 sm:text-right">
                <div className="bg-gray-50 rounded-xl px-4 py-2 text-center">
                  <div className="text-xs text-gray-400">Duración</div>
                  <div className="font-bold text-gray-700 text-sm">{svc.duration}</div>
                </div>
                <div className="bg-rose-50 rounded-xl px-4 py-2 text-center">
                  <div className="text-xs text-gray-400">Precio</div>
                  <div className="font-bold text-rose-600">{svc.price}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
