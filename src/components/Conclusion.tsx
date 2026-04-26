export default function Conclusion() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16">
      {/* Big conclusion card */}
      <div className="bg-gradient-to-br from-rose-500 via-pink-600 to-purple-700 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl" />

        <div className="relative z-10">
          <div className="text-5xl mb-4">🌿</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
            Conclusión
          </h2>
          <p className="text-rose-100 text-lg leading-relaxed mb-6 max-w-3xl">
            El modelo de plataforma intermediaria de masajes a domicilio especializada en mujeres presenta una{" "}
            <strong className="text-white">oportunidad de negocio sólida</strong> con inversión inicial baja y
            escalabilidad alta.
          </p>

          {/* 3 pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                icon: "📱",
                title: "Contenido viral educativo",
                desc: "Genera confianza y captación orgánica a coste mínimo",
              },
              {
                icon: "🌐",
                title: "Web de reservas impecable",
                desc: "Convierte visitas en clientes con experiencia fluida",
              },
              {
                icon: "⚙️",
                title: "Gestión eficiente de masajistas",
                desc: "Garantiza calidad, control y escalabilidad del servicio",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="bg-white/15 backdrop-blur rounded-2xl p-5">
                <div className="text-3xl mb-2">{pillar.icon}</div>
                <div className="font-bold mb-1">{pillar.title}</div>
                <div className="text-rose-200 text-sm">{pillar.desc}</div>
              </div>
            ))}
          </div>

          {/* Star services */}
          <div className="bg-white/10 rounded-2xl p-5 mb-8">
            <div className="text-sm font-bold text-rose-200 uppercase tracking-widest mb-3">
              Servicios estrella por su alta demanda y recurrencia
            </div>
            <div className="flex flex-wrap gap-3">
              {["🪵 Maderoterapia", "💧 Drenaje Linfático", "📸 Resultados visuales en RRSS"].map((s) => (
                <span key={s} className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("plan")}
              className="bg-white text-rose-600 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              🗓️ Ver el Plan de Acción
            </button>
            <button
              onClick={() => scrollTo("inicio")}
              className="bg-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/30 transition-all duration-200"
            >
              ↑ Volver al inicio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
