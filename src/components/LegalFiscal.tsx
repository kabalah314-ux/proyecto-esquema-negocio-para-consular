import SectionHeader from "./SectionHeader";

const legalItems = [
  {
    icon: "🏛️",
    title: "Forma jurídica",
    detail: "Autónomo al inicio. SL cuando el volumen lo justifique",
    status: "Inicio",
    color: "bg-blue-50 border-blue-200 text-blue-800",
  },
  {
    icon: "📋",
    title: "Alta en Hacienda",
    detail: "Modelo 036/037 (alta censal) obligatorio",
    status: "Obligatorio",
    color: "bg-red-50 border-red-200 text-red-800",
  },
  {
    icon: "🔢",
    title: "IAE",
    detail: "Epígrafe 839 (masajistas) o 751 (intermediación de servicios)",
    status: "Obligatorio",
    color: "bg-red-50 border-red-200 text-red-800",
  },
  {
    icon: "💶",
    title: "IVA",
    detail: "Masajes estéticos: 21% IVA. Terapéuticos por profesional sanitario titulado: posible exención",
    status: "Importante",
    color: "bg-amber-50 border-amber-200 text-amber-800",
  },
  {
    icon: "🔐",
    title: "Protección de datos (RGPD)",
    detail: "Aviso legal + política de privacidad en la web. Registro de clientes conforme al RGPD",
    status: "Obligatorio",
    color: "bg-red-50 border-red-200 text-red-800",
  },
  {
    icon: "🛡️",
    title: "Seguro de responsabilidad civil",
    detail: "Recomendable para cubrir posibles incidentes durante el servicio",
    status: "Recomendado",
    color: "bg-green-50 border-green-200 text-green-800",
  },
];

const statusColors: Record<string, string> = {
  "Inicio": "bg-blue-100 text-blue-700",
  "Obligatorio": "bg-red-100 text-red-700",
  "Importante": "bg-amber-100 text-amber-700",
  "Recomendado": "bg-green-100 text-green-700",
};

export default function LegalFiscal() {
  return (
    <section id="legal" className="py-16">
      <SectionHeader
        number="08"
        emoji="⚖️"
        title="Aspectos Legales y Fiscales"
        subtitle="Para operar legalmente en España como intermediaria de masajes"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {legalItems.map((item, i) => (
          <div key={i} className={`rounded-2xl p-5 border ${item.color}`}>
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-bold text-sm">{item.title}</span>
              </div>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${statusColors[item.status]}`}>
                {item.status}
              </span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Key warning */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="text-4xl">⚠️</span>
          <div>
            <h3 className="text-lg font-extrabold text-amber-900 mb-2">Acreditación Formativa — Obligatoria</h3>
            <p className="text-amber-800 leading-relaxed">
              Las masajistas deben acreditar su formación profesional: titulación en{" "}
              <strong>masaje terapéutico, quiromasaje, fisioterapia o estética</strong>.
              Es obligatorio exigir copia del título antes de incorporarlas a la plataforma.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Quiromasaje", "Fisioterapia", "Estética corporal", "Masaje terapéutico"].map((cert) => (
                <span key={cert} className="text-xs bg-amber-200 text-amber-900 px-3 py-1 rounded-full font-semibold">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legal timeline */}
      <div className="mt-6 bg-white rounded-3xl p-6 shadow-sm border border-rose-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">📅 Orden de Trámites al Lanzar</h3>
        <div className="space-y-3">
          {[
            { step: "1", action: "Alta en el RETA (Seguridad Social)", timing: "Antes de empezar" },
            { step: "2", action: "Alta censal en Hacienda (Modelo 036/037)", timing: "Antes de facturar" },
            { step: "3", action: "Aviso legal y política de privacidad en la web", timing: "Al lanzar la web" },
            { step: "4", action: "Contrato de colaboración con masajistas", timing: "Al incorporar cada masajista" },
            { step: "5", action: "Contratar seguro de responsabilidad civil", timing: "Antes del primer servicio" },
          ].map((t) => (
            <div key={t.step} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
              <div className="w-7 h-7 rounded-full bg-rose-500 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                {t.step}
              </div>
              <div className="flex-1 text-sm font-medium text-gray-800">{t.action}</div>
              <div className="text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full font-semibold whitespace-nowrap">
                {t.timing}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
