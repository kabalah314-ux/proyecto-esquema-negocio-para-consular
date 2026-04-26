import SectionHeader from "./SectionHeader";

const features = [
  { icon: "📅", feature: "Reservas online 24/7", tool: "Bookeo / Reservio / Acuity" },
  { icon: "💳", feature: "Pagos online", tool: "Stripe + pasarela del sistema" },
  { icon: "📊", feature: "Calendario de masajistas", tool: "Panel propio o Bookeo" },
  { icon: "🔔", feature: "Notificaciones automáticas", tool: "Email + WhatsApp (WATI)" },
  { icon: "🚀", feature: "Landing pages por servicio", tool: "WordPress / Webflow (SEO)" },
  { icon: "📝", feature: "Blog de contenido SEO", tool: "WordPress" },
];

const webStructure = [
  { emoji: "🏠", page: "Home", desc: "Propuesta de valor + CTA 'Reserva tu masaje'" },
  { emoji: "💆", page: "Servicios", desc: "Página individual por servicio (maderoterapia, drenaje, etc.)" },
  { emoji: "📅", page: "Reservas", desc: "Widget de reservas con pago online integrado" },
  { emoji: "💬", page: "Testimonios", desc: "Reseñas de Google + capturas de resultados reales" },
  { emoji: "📍", page: "Zonas de cobertura", desc: "Barcelona y alrededores con mapa interactivo" },
  { emoji: "📞", page: "Contacto", desc: "WhatsApp directo + formulario de contacto" },
  { emoji: "📝", page: "Blog", desc: "Artículos SEO sobre síntomas, tratamientos y consejos" },
];

export default function WebReservations() {
  return (
    <section id="web" className="py-16">
      <SectionHeader
        number="05"
        emoji="🌐"
        title="La Web de Reservas"
        subtitle="Optimizada para la conversión — masajescontacto.es o dominio nuevo"
      />

      {/* Mockup */}
      <div className="bg-white rounded-3xl p-4 shadow-sm border border-rose-100 mb-8 overflow-hidden">
        {/* Browser bar */}
        <div className="bg-gray-100 rounded-xl p-3 mb-4 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white rounded-lg px-4 py-1.5 text-sm text-gray-500 font-mono">
            🔒 masajescontacto.es
          </div>
        </div>

        {/* Fake website */}
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="font-extrabold text-rose-600 text-lg flex items-center gap-2">
              <span>🌿</span> MasajesHome
            </div>
            <div className="flex gap-2">
              {["Servicios", "Reservas", "Zonas", "Blog"].map((item) => (
                <span key={item} className="text-xs text-gray-600 hover:text-rose-500 cursor-pointer px-2">{item}</span>
              ))}
            </div>
          </div>
          <div className="text-center py-6">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Masajes a Domicilio para Mujeres</h3>
            <p className="text-gray-500 text-sm mb-4">Masajistas certificadas · Barcelona y alrededores</p>
            <button className="bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold px-6 py-2.5 rounded-full shadow text-sm">
              📅 Reserva tu masaje →
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-2">
            {["Maderoterapia", "Drenaje Linfático", "Masaje Reductor"].map((s) => (
              <div key={s} className="bg-white rounded-xl p-3 text-center shadow-sm">
                <div className="text-xl mb-1">💆</div>
                <div className="text-xs font-semibold text-gray-700">{s}</div>
                <div className="text-xs text-rose-500 mt-1">Ver más →</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Functionalities */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-rose-100 mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">⚙️ Funcionalidades Esenciales</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.feature} className="flex items-start gap-3 p-3 rounded-xl hover:bg-rose-50 transition-colors">
              <span className="text-2xl">{f.icon}</span>
              <div>
                <div className="font-semibold text-gray-800 text-sm">{f.feature}</div>
                <div className="text-xs text-gray-400 mt-0.5 bg-gray-100 rounded-full px-2 py-0.5 inline-block">{f.tool}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Web structure */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-rose-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">🗺️ Estructura de la Web</h3>
        <div className="space-y-2">
          {webStructure.map((page, i) => (
            <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-rose-50 transition-colors group">
              <span className="text-xl">{page.emoji}</span>
              <div className="w-28 shrink-0">
                <span className="font-bold text-gray-800 text-sm group-hover:text-rose-600 transition-colors">{page.page}</span>
              </div>
              <div className="flex-1 text-sm text-gray-500">{page.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
