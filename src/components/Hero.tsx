export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #fff1f2 0%, #ffe4e6 30%, #fce7f3 60%, #f5f3ff 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-rose-200 rounded-full opacity-30 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-300 rounded-full opacity-20 blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-purple-200 rounded-full opacity-20 blur-2xl" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-rose-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-xs font-semibold text-rose-600 uppercase tracking-widest">
            Plan de Negocio · 2025
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          Masajes a Domicilio{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
            para Mujeres
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          Plataforma intermediaria digital que conecta masajistas freelance con
          clientas, gestionando reservas, pagos y captación a través de redes
          sociales con inteligencia artificial.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { emoji: "💰", value: "40%", label: "Comisión plataforma" },
            { emoji: "🏷️", value: "60€", label: "Precio máximo" },
            { emoji: "📱", value: "3 plataformas", label: "Redes sociales" },
            { emoji: "📈", value: "~4.320 €/mes", label: "Proyección mes 12" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/80 backdrop-blur rounded-2xl p-4 shadow-sm border border-white"
            >
              <div className="text-2xl mb-1">{stat.emoji}</div>
              <div className="text-lg font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => scrollTo("modelo")}
            className="bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Ver el Modelo de Negocio →
          </button>
          <button
            onClick={() => scrollTo("finanzas")}
            className="bg-white text-rose-600 font-bold px-8 py-3 rounded-full shadow border border-rose-200 hover:bg-rose-50 transition-all duration-200"
          >
            📊 Ver Proyección Financiera
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-xs text-gray-400">Scroll</span>
        <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-rose-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
