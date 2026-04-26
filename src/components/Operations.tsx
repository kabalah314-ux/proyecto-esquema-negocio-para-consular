import { useState } from "react";
import SectionHeader from "./SectionHeader";

const appointmentFlow = [
  { icon: "📥", label: "Reserva recibida (web/WhatsApp)", color: "bg-blue-50 text-blue-700 border-blue-200" },
  { icon: "💳", label: "Pago procesado con Stripe (100%)", color: "bg-purple-50 text-purple-700 border-purple-200" },
  { icon: "🤖", label: "n8n asigna masajista disponible en la zona", color: "bg-cyan-50 text-cyan-700 border-cyan-200" },
  { icon: "📲", label: "Notificación automática a masajista (WhatsApp + email)", color: "bg-amber-50 text-amber-700 border-amber-200" },
  { icon: "✅", label: "Masajista confirma disponibilidad", color: "bg-green-50 text-green-700 border-green-200" },
  { icon: "🏠", label: "Masajista acude al domicilio", color: "bg-rose-50 text-rose-700 border-rose-200" },
  { icon: "📊", label: "Cierre de cita: estado 'completada'", color: "bg-orange-50 text-orange-700 border-orange-200" },
  { icon: "💸", label: "Transferencia semanal a masajista (70–75%)", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { icon: "⭐", label: "Solicitud automática de reseña a la clienta", color: "bg-yellow-50 text-yellow-700 border-yellow-200" },
];

const techStackA = [
  { name: "Bookeo / Reservio", role: "Reservas, calendario, pagos", icon: "📅" },
  { name: "Google Sheets / Notion", role: "Comisiones y pagos a masajistas", icon: "📊" },
  { name: "Stripe", role: "Control de ingresos y transferencias", icon: "💳" },
  { name: "n8n", role: "Automatización de flujos de trabajo", icon: "⚡" },
];

const techStackB = [
  { name: "Next.js / React", role: "Frontend del panel de control", icon: "⚛️" },
  { name: "Node.js + Supabase", role: "Backend y base de datos", icon: "🗄️" },
  { name: "Stripe Connect", role: "Split automático de pagos", icon: "💸" },
  { name: "Cal.com (open source)", role: "Sistema de reservas propio", icon: "📅" },
  { name: "Netlify / Vercel", role: "Deploy y hosting", icon: "🚀" },
];

export default function Operations() {
  const [techView, setTechView] = useState<"A" | "B">("A");
  const [activeFlowStep, setActiveFlowStep] = useState<number | null>(null);

  return (
    <section id="operaciones" className="py-16">
      <SectionHeader
        number="06"
        emoji="⚙️"
        title="Gestión Operativa y Back-Office"
        subtitle="Panel de control centralizado para masajistas, citas y pagos"
      />

      {/* Appointment flow */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-rose-100 mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Flujo de Gestión de una Cita</h3>
        <p className="text-sm text-gray-400 mb-5">Haz clic en cada paso para ver el detalle</p>
        <div className="flex flex-col gap-2">
          {appointmentFlow.map((step, i) => (
            <button
              key={i}
              onClick={() => setActiveFlowStep(activeFlowStep === i ? null : i)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all duration-200 ${step.color} ${
                activeFlowStep === i ? "shadow-md scale-[1.02]" : "hover:scale-[1.01]"
              }`}
            >
              <span className="text-xl flex-shrink-0">{step.icon}</span>
              <span className="font-semibold text-sm flex-1">{step.label}</span>
              <span className="text-xs opacity-60 w-6 h-6 rounded-full bg-current bg-opacity-10 flex items-center justify-center font-bold">
                {i + 1}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Tech stack options */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-rose-100 mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">🛠️ Opciones Tecnológicas</h3>
        <div className="flex gap-3 mb-6">
          {(["A", "B"] as const).map((opt) => (
            <button
              key={opt}
              onClick={() => setTechView(opt)}
              className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
                techView === opt
                  ? "bg-rose-500 text-white shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-rose-50"
              }`}
            >
              {opt === "A" ? "⚡ Opción A — Lanzamiento Rápido" : "🏗️ Opción B — Desarrollo Propio"}
            </button>
          ))}
        </div>

        {techView === "A" ? (
          <div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-4 text-sm text-blue-800">
              <strong>Recomendada para el inicio:</strong> Usa herramientas existentes para lanzar en semanas, no meses.
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {techStackA.map((t) => (
                <div key={t.name} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <span className="text-2xl">{t.icon}</span>
                  <div>
                    <div className="font-bold text-gray-800 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 mb-4 text-sm text-purple-800">
              <strong>Para escalabilidad:</strong> Control total del producto. Aprovecha el perfil técnico disponible.
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {techStackB.map((t) => (
                <div key={t.name} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <span className="text-2xl">{t.icon}</span>
                  <div>
                    <div className="font-bold text-gray-800 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Massagist profile */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-rose-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">👩 Ficha de Masajista en el Sistema</h3>
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-5 border border-rose-100">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-2xl text-white shadow">
              👩
            </div>
            <div>
              <div className="font-bold text-gray-900">Ana García Rodríguez</div>
              <div className="text-sm text-gray-500">Terapeuta certificada · Barcelona</div>
              <div className="flex gap-1 mt-1">
                {["Maderoterapia", "Drenaje", "Relajante"].map((tag) => (
                  <span key={tag} className="text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: "DNI/NIE", value: "Verificado ✓", icon: "🪪" },
              { label: "Certificados", value: "Quiromasaje + Estética", icon: "📜" },
              { label: "Zonas", value: "Eixample, Gracia, Sarrià", icon: "📍" },
              { label: "Disponibilidad", value: "Lun–Sáb 9h–20h", icon: "🕐" },
              { label: "Citas asignadas", value: "47 completadas", icon: "✅" },
              { label: "Ingresos totales", value: "2.350 € (mes)", icon: "💰" },
            ].map((field) => (
              <div key={field.label} className="bg-white rounded-xl p-3 shadow-sm">
                <div className="text-lg mb-1">{field.icon}</div>
                <div className="text-xs text-gray-400">{field.label}</div>
                <div className="font-semibold text-gray-800 text-xs mt-0.5">{field.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
