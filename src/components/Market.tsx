import SectionHeader from "./SectionHeader";

const segments = [
  { emoji: "👩‍💼", title: "Mujeres 28–50 años", desc: "Con trabajo activo y poco tiempo libre para cuidarse", tag: "Segmento principal" },
  { emoji: "🤱", title: "Postparto", desc: "Drenaje linfático post-cesárea y recuperación física", tag: "Alta recurrencia" },
  { emoji: "🍊", title: "Preocupaciones estéticas", desc: "Celulitis, piernas pesadas, grasa localizada", tag: "Mayor volumen" },
  { emoji: "🦴", title: "Dolores musculares", desc: "Espalda, cervicales, contracturas crónicas", tag: "Fidelización alta" },
  { emoji: "🤰", title: "Embarazadas", desc: "Masaje prenatal para dolores y bienestar", tag: "Nicho premium" },
];

export default function Market() {
  return (
    <section id="mercado" className="py-16">
      <SectionHeader
        number="02"
        emoji="🎯"
        title="Mercado Objetivo"
        subtitle="¿Por qué enfocarse en mujeres? Representan la mayor demanda de bienestar corporal en España"
      />

      {/* Why women callout */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-3xl p-6 sm:p-8 text-white mb-8 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="text-5xl">👩</div>
          <div>
            <h3 className="text-xl font-extrabold mb-2">Propuesta de valor única</h3>
            <p className="text-rose-100 text-lg leading-relaxed">
              <strong className="text-white">Masajistas mujeres, para mujeres, en su domicilio.</strong>
              <br />
              Las mujeres son las principales consumidoras de tratamientos anticelulíticos, reductores
              y de relajación, y se sienten más cómodas siendo atendidas por otras mujeres.
            </p>
          </div>
        </div>
      </div>

      {/* Segments */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {segments.map((seg, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 shadow-sm border border-rose-50 hover:shadow-md hover:border-rose-200 transition-all duration-200 group"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-3xl group-hover:scale-110 transition-transform duration-200">{seg.emoji}</span>
              <span className="text-xs bg-rose-100 text-rose-700 font-semibold px-2 py-0.5 rounded-full">
                {seg.tag}
              </span>
            </div>
            <h4 className="font-bold text-gray-900 mb-1">{seg.title}</h4>
            <p className="text-sm text-gray-500">{seg.desc}</p>
          </div>
        ))}

        {/* Spain stats card */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-100">
          <div className="text-3xl mb-3">🇪🇸</div>
          <h4 className="font-bold text-gray-900 mb-3">Contexto España</h4>
          <div className="space-y-2">
            {[
              { label: "Mercado bienestar España", value: "Crecimiento anual +7%" },
              { label: "Masajes a domicilio", value: "Búsquedas en alza" },
              { label: "Maderoterapia", value: "Tendencia viral en RRSS" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{stat.label}</span>
                <span className="font-bold text-purple-700 text-xs bg-purple-100 px-2 py-0.5 rounded-full">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Geographic focus */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-rose-100">
        <h3 className="font-bold text-gray-800 mb-4">🗺️ Estrategia de Expansión Geográfica</h3>
        <div className="flex flex-wrap gap-3">
          {[
            { city: "Barcelona", status: "Lanzamiento", color: "bg-rose-500 text-white" },
            { city: "Madrid", status: "Fase 4", color: "bg-rose-100 text-rose-700" },
            { city: "Valencia", status: "Fase 4", color: "bg-rose-100 text-rose-700" },
            { city: "Alrededores BCN", status: "Fase 3", color: "bg-pink-100 text-pink-700" },
          ].map((loc) => (
            <div key={loc.city} className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm ${loc.color}`}>
              <span>📍</span>
              <span>{loc.city}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${loc.color === "bg-rose-500 text-white" ? "bg-white/20" : "bg-white"}`}>
                {loc.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
