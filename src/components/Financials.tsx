import { useState } from "react";
import SectionHeader from "./SectionHeader";

const revenueData = [
  { month: "Mes 1", massagists: 2, perWeek: 10, gross: 600, commission: 240 },
  { month: "Mes 2", massagists: 3, perWeek: 20, gross: 1200, commission: 480 },
  { month: "Mes 3", massagists: 4, perWeek: 35, gross: 2100, commission: 840 },
  { month: "Mes 6", massagists: 8, perWeek: 80, gross: 4800, commission: 1920 },
  { month: "Mes 12", massagists: 15, perWeek: 180, gross: 10800, commission: 4320 },
];

const expenses = [
  { concept: "Publicidad Meta (Instagram/Facebook)", range: "10% beneficio", icon: "📣" },
  { concept: "Herramientas de reservas (Bookeo/Reservio)", range: "30–60 €", icon: "📅" },
  { concept: "Imprevistos y materiales", range: "30–50 €", icon: "🔧" },
];

export default function Financials() {
  const [selectedMonth, setSelectedMonth] = useState(0);
  const selected = revenueData[selectedMonth];
  const maxGross = Math.max(...revenueData.map((d) => d.gross));

  return (
    <section id="finanzas" className="py-16">
      <SectionHeader
        number="10"
        emoji="💰"
        title="Proyección Financiera"
        subtitle="Escenario realista Barcelona — Precio máximo de 60 € por masaje, comisión 40%"
      />

      {/* Interactive chart */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-rose-100 mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-6">📈 Evolución de Ingresos (12 meses)</h3>

        {/* Bar chart */}
        <div className="flex items-end gap-3 h-48 mb-4">
          {revenueData.map((d, i) => (
            <button
              key={i}
              onClick={() => setSelectedMonth(i)}
              className="flex-1 flex flex-col items-center gap-1 group"
            >
              {/* Commission bar */}
              <div className="w-full flex flex-col justify-end" style={{ height: "180px" }}>
                <div
                  className={`w-full rounded-t-lg transition-all duration-500 flex items-start justify-center pt-1 ${
                    selectedMonth === i
                      ? "bg-gradient-to-t from-rose-600 to-rose-400 shadow-lg"
                      : "bg-gradient-to-t from-rose-300 to-rose-200 group-hover:from-rose-400 group-hover:to-rose-300"
                  }`}
                  style={{ height: `${(d.gross / maxGross) * 100}%` }}
                >
                  {selectedMonth === i && (
                    <span className="text-white text-xs font-bold rotate-0 hidden sm:block">
                      {d.gross}€
                    </span>
                  )}
                </div>
              </div>
              <span className={`text-xs font-semibold ${selectedMonth === i ? "text-rose-600" : "text-gray-400"}`}>
                {d.month.replace("Mes ", "M")}
              </span>
            </button>
          ))}
        </div>

        {/* Selected month detail */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Masajistas activas", value: selected.massagists, icon: "👩", unit: "" },
            { label: "Masajes/semana", value: selected.perWeek, icon: "💆", unit: "" },
            { label: "Ingreso bruto", value: selected.gross.toLocaleString(), icon: "💵", unit: " €" },
            { label: "Comisión 40%", value: selected.commission.toLocaleString(), icon: "🏦", unit: " €", highlight: true },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`rounded-2xl p-4 text-center ${
                stat.highlight
                  ? "bg-gradient-to-br from-rose-500 to-pink-600 text-white"
                  : "bg-rose-50"
              }`}
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className={`text-xl font-extrabold ${stat.highlight ? "text-white" : "text-gray-900"}`}>
                {stat.value}{stat.unit}
              </div>
              <div className={`text-xs mt-0.5 ${stat.highlight ? "text-rose-200" : "text-gray-400"}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-start gap-2 text-xs text-gray-400 p-3 bg-gray-50 rounded-xl">
          <span>ℹ️</span>
          <span>Clic en las barras para ver el detalle de cada mes. Precio máximo: <strong>60 €/masaje</strong> · Comisión plataforma: <strong>40%</strong></span>
        </div>
      </div>

      {/* Growth path */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-rose-100 mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-5">🚀 Camino de Crecimiento</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-gray-400 font-semibold uppercase tracking-wider">
                <th className="pb-3">Período</th>
                <th className="pb-3">Masajistas</th>
                <th className="pb-3">Masajes/sem</th>
                <th className="pb-3">Ingreso bruto</th>
                <th className="pb-3 text-rose-600">Comisión (40%)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {revenueData.map((row, i) => (
                <tr
                  key={i}
                  className={`transition-colors ${i === selectedMonth ? "bg-rose-50" : "hover:bg-gray-50"}`}
                >
                  <td className="py-3 font-bold text-gray-800">{row.month}</td>
                  <td className="py-3">{row.massagists}</td>
                  <td className="py-3">{row.perWeek}</td>
                  <td className="py-3">{row.gross.toLocaleString()} €</td>
                  <td className="py-3 font-bold text-rose-600">~{row.commission.toLocaleString()} €</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Expenses */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-rose-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">📤 Gastos Mensuales (Fase de Lanzamiento)</h3>
        <div className="space-y-3 mb-5">
          {expenses.map((exp, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <span className="text-xl">{exp.icon}</span>
              <span className="flex-1 text-sm text-gray-700">{exp.concept}</span>
              <span className="font-bold text-gray-800 text-sm bg-white rounded-lg px-3 py-1 shadow-sm">
                {exp.range}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between bg-rose-50 border border-rose-200 rounded-xl p-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">💡</span>
            <span className="font-bold text-gray-800">Total mensual estimado</span>
          </div>
          <div className="text-xl font-extrabold text-rose-600">~30–60 € + 10% beneficio</div>
        </div>
      </div>
    </section>
  );
}
