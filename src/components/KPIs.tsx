import SectionHeader from "./SectionHeader";

const kpis = [
  {
    icon: "👥",
    metric: "Seguidores activos en Instagram",
    target: "+1.000",
    period: "Mes 3",
    progress: 40,
    color: "from-pink-400 to-rose-500",
  },
  {
    icon: "👀",
    metric: "Alcance semanal de Reels",
    target: "+10.000 vistas",
    period: "Mes 3",
    progress: 60,
    color: "from-purple-400 to-violet-500",
  },
  {
    icon: "🔄",
    metric: "Tasa de conversión web → reserva",
    target: ">3%",
    period: "Mes 3",
    progress: 45,
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: "💆",
    metric: "Masajes completados por semana",
    target: "30+",
    period: "Mes 3",
    progress: 55,
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: "⭐",
    metric: "Valoración media en Google",
    target: "4,8 / 5 ⭐",
    period: "Mes 3",
    progress: 80,
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: "🔄",
    metric: "Tasa de clientas recurrentes",
    target: ">40%",
    period: "Mes 3",
    progress: 50,
    color: "from-rose-400 to-pink-500",
  },
  {
    icon: "💰",
    metric: "Coste por adquisición (CPA)",
    target: "<15 €",
    period: "Mes 3",
    progress: 70,
    color: "from-green-400 to-emerald-500",
  },
];

export default function KPIs() {
  return (
    <section id="kpis" className="py-16">
      <SectionHeader
        number="11"
        emoji="📊"
        title="KPIs Clave a Monitorizar"
        subtitle="Indicadores de rendimiento para medir el éxito — Meta al mes 3"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {kpis.map((kpi, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 shadow-sm border border-rose-50 hover:shadow-md hover:border-rose-200 transition-all duration-200 group"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                {kpi.icon}
              </span>
              <span className="text-xs font-semibold bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                {kpi.period}
              </span>
            </div>
            <div className="text-sm text-gray-600 mb-2 leading-tight">{kpi.metric}</div>
            <div className={`text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${kpi.color} mb-3`}>
              {kpi.target}
            </div>
            {/* Progress bar */}
            <div className="h-1.5 bg-gray-100 rounded-full">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${kpi.color} transition-all duration-700`}
                style={{ width: `${kpi.progress}%` }}
              />
            </div>
            <div className="text-xs text-gray-400 mt-1">
              Estimación de progreso: {kpi.progress}%
            </div>
          </div>
        ))}
      </div>

      {/* Monitoring tools */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-rose-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">🛠️ Herramientas de Seguimiento</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { tool: "Meta Business Suite", use: "Métricas de Reels e Instagram", icon: "📊" },
            { tool: "Google Analytics 4", use: "Tráfico y conversión web", icon: "🌐" },
            { tool: "Stripe Dashboard", use: "Ingresos y pagos", icon: "💳" },
            { tool: "Google My Business", use: "Reseñas y valoraciones", icon: "⭐" },
          ].map((t) => (
            <div key={t.tool} className="p-4 bg-gray-50 rounded-xl text-center">
              <div className="text-2xl mb-2">{t.icon}</div>
              <div className="font-bold text-gray-800 text-xs mb-1">{t.tool}</div>
              <div className="text-xs text-gray-400">{t.use}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
