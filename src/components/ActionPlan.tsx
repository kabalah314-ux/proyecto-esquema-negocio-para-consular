import { useState } from "react";
import SectionHeader from "./SectionHeader";

const phases = [
  {
    id: "fase1",
    label: "FASE 1",
    title: "Validación y Preparación",
    period: "Semanas 1–4",
    color: "from-blue-400 to-blue-600",
    bgLight: "bg-blue-50 border-blue-200",
    textColor: "text-blue-700",
    tasks: [
      "Definir el nombre de marca y dominio definitivo",
      "Crear perfil de Instagram y TikTok con branding consistente",
      "Preparar los primeros 10 vídeos cortos con IA (guión, imágenes, voz, edición)",
      "Configurar WhatsApp Business con catálogo y respuestas automáticas",
      "Optimizar la web existente: añadir sistema de reservas + pago con Stripe",
      "Reclutar las primeras 2–3 masajistas de confianza (zona Barcelona)",
      "Hacer los primeros masajes de prueba para obtener reseñas y fotos",
    ],
  },
  {
    id: "fase2",
    label: "FASE 2",
    title: "Lanzamiento y Contenido",
    period: "Semanas 5–12",
    color: "from-purple-400 to-purple-600",
    bgLight: "bg-purple-50 border-purple-200",
    textColor: "text-purple-700",
    tasks: [
      "Publicar 1 vídeo diario en Instagram Reels + TikTok",
      "Activar campañas de publicidad pagada en Instagram (5–10 €/día)",
      "Recopilar testimonios y resultados reales de las primeras clientas",
      "Crear páginas de servicio en la web con SEO",
      "Lanzar bono de bienvenida: 'Primera sesión con 20% descuento'",
      "Incorporar 2–3 masajistas adicionales según la demanda",
    ],
  },
  {
    id: "fase3",
    label: "FASE 3",
    title: "Escalado y Automatización",
    period: "Meses 3–6",
    color: "from-orange-400 to-orange-600",
    bgLight: "bg-orange-50 border-orange-200",
    textColor: "text-orange-700",
    tasks: [
      "Implementar flujos n8n para automatizar confirmaciones y recordatorios",
      "Lanzar programa de bonos (bono 5 sesiones, bono 10 sesiones con descuento)",
      "Expandir cobertura a más barrios o ciudades",
      "Desarrollar panel de control propio para masajistas",
      "Crear canal de YouTube con vídeos más largos (SEO a largo plazo)",
      "Explorar colaboraciones con influencers del sector wellness",
    ],
  },
  {
    id: "fase4",
    label: "FASE 4",
    title: "Consolidación",
    period: "Mes 6 en adelante",
    color: "from-rose-400 to-rose-600",
    bgLight: "bg-rose-50 border-rose-200",
    textColor: "text-rose-700",
    tasks: [
      "Implementar programa de fidelización (puntos, descuentos por referidos)",
      "Explorar venta de bonos regalo (Navidad, San Valentín, Día de la Madre)",
      "Abrir el modelo a nuevas ciudades (Valencia, Madrid)",
      "Evaluar el desarrollo de una app móvil propia (iOS + Android)",
      "Estudiar servicios premium (masajes en hotel, eventos corporativos)",
    ],
  },
];

export default function ActionPlan() {
  const [activePhase, setActivePhase] = useState("fase1");
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggleCheck = (key: string) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const active = phases.find((p) => p.id === activePhase)!;

  return (
    <section id="plan" className="py-16">
      <SectionHeader
        number="09"
        emoji="🗓️"
        title="Plan de Acción Paso a Paso"
        subtitle="4 fases desde el lanzamiento hasta la consolidación"
      />

      {/* Phase selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {phases.map((phase) => (
          <button
            key={phase.id}
            onClick={() => setActivePhase(phase.id)}
            className={`rounded-2xl p-4 text-left transition-all duration-200 ${
              activePhase === phase.id
                ? `bg-gradient-to-br ${phase.color} text-white shadow-lg scale-105`
                : "bg-white border border-gray-100 hover:border-rose-200"
            }`}
          >
            <div className={`text-xs font-bold mb-1 ${activePhase === phase.id ? "text-white/70" : "text-gray-400"}`}>
              {phase.label}
            </div>
            <div className={`font-bold text-sm leading-tight mb-1 ${activePhase === phase.id ? "text-white" : "text-gray-800"}`}>
              {phase.title}
            </div>
            <div className={`text-xs ${activePhase === phase.id ? "text-white/70" : "text-gray-400"}`}>
              {phase.period}
            </div>
          </button>
        ))}
      </div>

      {/* Active phase tasks */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-rose-100">
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-5 bg-gradient-to-r ${active.color} text-white`}>
          <span>{active.label}</span>
          <span>·</span>
          <span>{active.period}</span>
        </div>

        <div className="space-y-3">
          {active.tasks.map((task, i) => {
            const key = `${active.id}-${i}`;
            const isDone = checked[key];
            return (
              <button
                key={i}
                onClick={() => toggleCheck(key)}
                className={`flex items-center gap-3 w-full p-3 rounded-xl text-left transition-all duration-200 group ${
                  isDone ? `${active.bgLight} border` : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                  isDone
                    ? `bg-gradient-to-br ${active.color} border-transparent`
                    : "border-gray-300 group-hover:border-rose-400"
                }`}>
                  {isDone && <span className="text-white text-xs">✓</span>}
                </div>
                <span className={`text-sm font-medium transition-colors ${
                  isDone ? `${active.textColor} line-through opacity-60` : "text-gray-700"
                }`}>
                  {task}
                </span>
              </button>
            );
          })}
        </div>

        {/* Progress */}
        {active.tasks.length > 0 && (
          <div className="mt-5 pt-5 border-t border-gray-100">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-500">Progreso de {active.label}</span>
              <span className={`font-bold ${active.textColor}`}>
                {active.tasks.filter((_, i) => checked[`${active.id}-${i}`]).length}/{active.tasks.length} tareas
              </span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${active.color} transition-all duration-500`}
                style={{
                  width: `${(active.tasks.filter((_, i) => checked[`${active.id}-${i}`]).length / active.tasks.length) * 100}%`,
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Tip */}
      <div className="mt-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4 flex gap-3">
        <span className="text-xl">💡</span>
        <p className="text-sm text-amber-800">
          <strong>Clave de éxito:</strong> Con una ejecución disciplinada de la estrategia de contenido en los primeros{" "}
          <strong>90 días</strong>, es posible alcanzar un flujo estable de clientes antes de los 3 meses de actividad.
        </p>
      </div>
    </section>
  );
}
