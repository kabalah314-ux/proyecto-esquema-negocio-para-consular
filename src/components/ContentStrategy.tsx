import { useState } from "react";
import SectionHeader from "./SectionHeader";

const aiSteps = [
  { step: 1, tool: "ChatGPT", icon: "🤖", color: "from-green-400 to-emerald-500", desc: "Redacta el guión: síntomas, beneficios, llamada a la acción" },
  { step: 2, tool: "Midjourney / DALL·E", icon: "🎨", color: "from-purple-400 to-violet-500", desc: "Genera imágenes: mujeres recibiendo masaje, anatomía, infografías" },
  { step: 3, tool: "Runway ML / Kling / Veo 3", icon: "🎬", color: "from-blue-400 to-cyan-500", desc: "Anima las imágenes estáticas en vídeos fluidos y realistas" },
  { step: 4, tool: "ElevenLabs", icon: "🎙️", color: "from-orange-400 to-amber-500", desc: "Narración con voz femenina española, cálida y profesional" },
  { step: 5, tool: "CapCut / Premiere", icon: "✂️", color: "from-pink-400 to-rose-500", desc: "Subtítulos automáticos, música de fondo, branding de marca" },
  { step: 6, tool: "3 Plataformas", icon: "📲", color: "from-rose-500 to-red-500", desc: "Publicación simultánea en Instagram Reels + TikTok + YouTube Shorts" },
];

const contentIdeas = [
  { title: "¿Por qué tienes celulitis aunque hagas ejercicio?", type: "Educativo", platform: "TikTok", emoji: "🍊" },
  { title: "Señales de que tienes retención de líquidos", type: "Síntomas", platform: "Instagram", emoji: "💧" },
  { title: "¿Por qué tus piernas se hinchan por la tarde?", type: "Educativo", platform: "YouTube", emoji: "🦵" },
  { title: "Resultados reales tras 10 sesiones de maderoterapia", type: "Testimonios", platform: "Instagram", emoji: "📸" },
  { title: "¿Qué es la maderoterapia y cómo funciona?", type: "Demo", platform: "TikTok", emoji: "🪵" },
];

const funnelSteps = [
  { icon: "👀", label: "Ve el Reel/TikTok", color: "bg-purple-100 text-purple-700" },
  { icon: "🔗", label: "Clic en bio (Linktree)", color: "bg-blue-100 text-blue-700" },
  { icon: "🌐", label: "Visita la web", color: "bg-cyan-100 text-cyan-700" },
  { icon: "📅", label: "Elige y reserva", color: "bg-green-100 text-green-700" },
  { icon: "💳", label: "Pago online", color: "bg-emerald-100 text-emerald-700" },
  { icon: "📍", label: "Masajista asignada", color: "bg-amber-100 text-amber-700" },
  { icon: "🏠", label: "Masaje en domicilio", color: "bg-orange-100 text-orange-700" },
  { icon: "⭐", label: "Reseña + fidelización", color: "bg-rose-100 text-rose-700" },
];

export default function ContentStrategy() {
  const [activeAiStep, setActiveAiStep] = useState(0);

  return (
    <section id="captacion" className="py-16">
      <SectionHeader
        number="04"
        emoji="📱"
        title="Estrategia de Captación"
        subtitle="Contenido educativo con IA + Embudo de conversión optimizado"
      />

      {/* AI Flow */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-rose-100 mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Flujo de Producción de Vídeos con IA</h3>
        <p className="text-sm text-gray-500 mb-6">Sin cámaras reales — 100% generado con inteligencia artificial</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {aiSteps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveAiStep(i)}
              className={`flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all duration-200 ${
                activeAiStep === i
                  ? "border-rose-400 shadow-md scale-105"
                  : "border-gray-100 hover:border-rose-200"
              }`}
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-xl shadow`}>
                {s.icon}
              </div>
              <span className="text-xs font-bold text-center text-gray-700 leading-tight">{s.tool}</span>
              <span className={`text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center ${
                activeAiStep === i ? "bg-rose-500 text-white" : "bg-gray-200 text-gray-500"
              }`}>{s.step}</span>
            </button>
          ))}
        </div>

        <div className={`bg-gradient-to-r ${aiSteps[activeAiStep].color} rounded-2xl p-5 text-white`}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{aiSteps[activeAiStep].icon}</span>
            <div>
              <div className="text-xs opacity-80 font-semibold uppercase tracking-widest">Paso {aiSteps[activeAiStep].step}</div>
              <div className="font-extrabold text-lg">{aiSteps[activeAiStep].tool}</div>
            </div>
          </div>
          <p className="text-sm opacity-90">{aiSteps[activeAiStep].desc}</p>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Frecuencia recomendada: <strong className="text-gray-700">1 vídeo/día durante los primeros 90 días</strong></span>
        </div>
      </div>

      {/* Platforms */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { platform: "Instagram", icon: "📸", focus: "Reels cortos + Historias + CTA a WhatsApp/Web", color: "from-pink-500 to-purple-600", priority: "🔥 Prioritaria" },
          { platform: "TikTok", icon: "🎵", focus: "Vídeos virales de síntomas, causas y soluciones", color: "from-gray-800 to-gray-900", priority: "🔥 Prioritaria" },
          { platform: "YouTube Shorts", icon: "▶️", focus: "Mayor permanencia del contenido en buscadores", color: "from-red-500 to-red-600", priority: "📈 Complementaria" },
        ].map((p) => (
          <div key={p.platform} className={`bg-gradient-to-br ${p.color} rounded-3xl p-5 text-white shadow-lg`}>
            <div className="text-3xl mb-2">{p.icon}</div>
            <div className="font-extrabold text-lg mb-1">{p.platform}</div>
            <div className="text-sm opacity-80 mb-3">{p.focus}</div>
            <div className="text-xs bg-white/20 rounded-full px-3 py-1 inline-block">{p.priority}</div>
          </div>
        ))}
      </div>

      {/* Content ideas */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-rose-100 mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">💡 Ideas de Contenido que Funcionan</h3>
        <div className="space-y-3">
          {contentIdeas.map((idea, i) => (
            <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-rose-50 transition-colors">
              <span className="text-2xl">{idea.emoji}</span>
              <div className="flex-1">
                <div className="font-semibold text-gray-800 text-sm">"{idea.title}"</div>
                <div className="text-xs text-gray-400 mt-0.5">Tipo: {idea.type}</div>
              </div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                idea.platform === "TikTok" ? "bg-gray-100 text-gray-700" :
                idea.platform === "Instagram" ? "bg-pink-100 text-pink-700" :
                "bg-red-100 text-red-700"
              }`}>
                {idea.platform}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Conversion funnel */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-rose-100">
        <h3 className="text-lg font-bold text-gray-800 mb-6">🔀 Embudo de Conversión Completo</h3>
        <div className="flex flex-col items-center gap-0">
          {funnelSteps.map((step, i) => (
            <div key={i} className="flex flex-col items-center w-full max-w-sm">
              <div className={`flex items-center gap-3 px-6 py-3 rounded-2xl w-full ${step.color} font-semibold text-sm`}
                style={{ width: `${100 - i * 6}%` }}>
                <span className="text-lg">{step.icon}</span>
                <span>{step.label}</span>
              </div>
              {i < funnelSteps.length - 1 && (
                <div className="w-0.5 h-3 bg-gray-200" />
              )}
            </div>
          ))}
        </div>

        {/* WhatsApp Business */}
        <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex gap-3">
          <span className="text-2xl">📱</span>
          <div>
            <div className="font-bold text-emerald-800 mb-1">WhatsApp Business — Canal de ventas clave</div>
            <div className="flex flex-wrap gap-2">
              {["Catálogo de servicios", "Respuestas automáticas", "Enlace desde Instagram", "Integración con reservas"].map((f) => (
                <span key={f} className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">{f}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
