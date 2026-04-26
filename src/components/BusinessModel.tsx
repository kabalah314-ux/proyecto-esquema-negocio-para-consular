import { useState } from "react";
import SectionHeader from "./SectionHeader";

const steps = [
  { icon: "📱", title: "Captación", desc: "La plataforma capta clientas a través de redes sociales, web y WhatsApp con contenido IA" },
  { icon: "📅", title: "Reserva", desc: "La clienta elige servicio, fecha y hora. Paga online con Stripe (100% del importe)" },
  { icon: "🔀", title: "Asignación", desc: "El sistema asigna automáticamente a la masajista disponible en la zona" },
  { icon: "🏠", title: "Servicio", desc: "La masajista acude al domicilio de la clienta y ejecuta el masaje" },
  { icon: "💸", title: "Comisión", desc: "La plataforma retiene el 25–30%. La masajista recibe el 70–75% semanalmente" },
  { icon: "⭐", title: "Fidelización", desc: "Solicitud automática de reseña + recordatorio para siguiente sesión" },
];

const commissionData = [
  { label: "Precio al cliente", value: "60–90 €", color: "bg-rose-100 text-rose-700", wide: true },
  { label: "Comisión plataforma (28%)", value: "~18–21 €", color: "bg-purple-100 text-purple-700", wide: false },
  { label: "Cobro neto masajista (72%)", value: "~49–52 €", color: "bg-emerald-100 text-emerald-700", wide: false },
];

export default function BusinessModel() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="modelo" className="py-16">
      <SectionHeader
        number="01"
        emoji="🏗️"
        title="El Modelo de Negocio"
        subtitle="Plataforma intermediaria digital — Tú pones los clientes, las masajistas ponen el servicio"
      />

      {/* How it works interactive */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-rose-100 mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-6">¿Cómo funciona? — Flujo completo</h3>
        
        {/* Step indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                activeStep === i
                  ? "border-rose-400 bg-rose-50 shadow-md scale-105"
                  : "border-gray-100 bg-gray-50 hover:border-rose-200"
              }`}
            >
              <span className="text-2xl">{step.icon}</span>
              <span className={`text-xs font-bold ${activeStep === i ? "text-rose-600" : "text-gray-600"}`}>
                {step.title}
              </span>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                activeStep === i ? "bg-rose-500 text-white" : "bg-gray-200 text-gray-500"
              }`}>
                {i + 1}
              </div>
            </button>
          ))}
        </div>

        {/* Active step detail */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-100">
          <div className="flex items-start gap-4">
            <span className="text-4xl">{steps[activeStep].icon}</span>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">
                Paso {activeStep + 1}: {steps[activeStep].title}
              </h4>
              <p className="text-gray-600">{steps[activeStep].desc}</p>
            </div>
          </div>
          {/* Progress bar */}
          <div className="mt-4 h-1.5 bg-rose-100 rounded-full">
            <div
              className="h-full bg-gradient-to-r from-rose-400 to-pink-500 rounded-full transition-all duration-500"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Commission breakdown */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-rose-100 mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Estructura de Comisiones</h3>
        <p className="text-sm text-gray-500 mb-6">Ejemplo con masaje de 70 €</p>

        {/* Visual bar */}
        <div className="mb-6">
          <div className="flex h-10 rounded-xl overflow-hidden shadow-inner">
            <div className="w-[28%] bg-gradient-to-r from-purple-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
              28% Plataforma
            </div>
            <div className="w-[72%] bg-gradient-to-r from-emerald-400 to-emerald-500 flex items-center justify-center text-white text-xs font-bold">
              72% Masajista
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1 px-1">
            <span>~19,60 €</span>
            <span>~50,40 €</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {commissionData.map((item) => (
            <div
              key={item.label}
              className={`rounded-2xl p-4 ${item.color} border border-current border-opacity-20`}
            >
              <div className="text-xl font-extrabold mb-1">{item.value}</div>
              <div className="text-xs font-semibold opacity-80">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-2xl flex gap-3">
          <span className="text-xl">💡</span>
          <p className="text-sm text-amber-800">
            <strong>Referencia de mercado:</strong> Plataformas como Taskia aplican comisiones del 15%. Para un modelo con gestión completa de agenda, pago y captación, el <strong>25–30% es competitivo y justificable</strong>.
          </p>
        </div>
      </div>

      {/* Comparison cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: "🛵", name: "Glovo", model: "Reparte comida", similarity: "Modelo plataforma intermediaria", color: "from-orange-400 to-orange-500" },
          { icon: "🚗", name: "Uber", model: "Conecta conductores", similarity: "Freelances bajo marca", color: "from-gray-600 to-gray-700" },
          { icon: "🌿", name: "MasajesHome", model: "Masajes a domicilio", similarity: "¡Este es tu modelo!", color: "from-rose-500 to-pink-600", highlight: true },
        ].map((c) => (
          <div
            key={c.name}
            className={`rounded-3xl p-5 text-white bg-gradient-to-br ${c.color} shadow-lg ${c.highlight ? "ring-4 ring-rose-300 scale-105" : ""}`}
          >
            <div className="text-3xl mb-2">{c.icon}</div>
            <div className="font-extrabold text-lg">{c.name}</div>
            <div className="text-sm opacity-80 mb-2">{c.model}</div>
            <div className="text-xs bg-white/20 rounded-full px-3 py-1 inline-block">{c.similarity}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
