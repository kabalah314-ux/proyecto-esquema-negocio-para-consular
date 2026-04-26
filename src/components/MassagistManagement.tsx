import SectionHeader from "./SectionHeader";

const recruitChannels = [
  { icon: "👥", channel: "Grupos de Facebook", desc: "Masajistas autónomos en España — búsqueda directa y anuncios" },
  { icon: "💼", channel: "LinkedIn", desc: "Búsqueda de terapeutes en tu ciudad + mensajes directos" },
  { icon: "📸", channel: "Instagram", desc: "Contacto con masajistas que ya trabajan por su cuenta" },
  { icon: "📋", channel: "Portales de empleo", desc: "Infojobs, Milanuncios, Wallapop Servicios" },
  { icon: "🎓", channel: "Academias de masajes", desc: "Acuerdos para captar recién tituladas" },
];

const valueProps = [
  { icon: "📢", text: "Sin necesidad de invertir en marketing ni en web" },
  { icon: "📅", text: "Agenda gestionada y controlada por la plataforma" },
  { icon: "💰", text: "Cobro garantizado y puntual (transferencia semanal)" },
  { icon: "⏰", text: "Flexibilidad horaria total" },
  { icon: "🔄", text: "Clientes recurrentes gracias a bonos de sesiones múltiples" },
];

const legalPoints = [
  { icon: "📋", title: "Porcentaje de comisión", desc: "40% para la plataforma, documentado y acordado" },
  { icon: "📆", title: "Tiempos de pago", desc: "Transferencia semanal o quincenal según acuerdo" },
  { icon: "❌", title: "Política de cancelaciones", desc: "Protocolo claro para cancelaciones de clientas" },
  { icon: "🏷️", title: "Uso de la marca", desc: "Uniformidad del servicio y presentación de marca" },
  { icon: "🔒", title: "No competencia directa", desc: "Cláusula sobre clientas captadas por la plataforma" },
  { icon: "🎓", title: "Acreditación formativa", desc: "Copia del título antes de incorporar a la plataforma" },
];

export default function MassagistManagement() {
  return (
    <section id="masajistas" className="py-16">
      <SectionHeader
        number="07"
        emoji="👩‍⚕️"
        title="Captación y Gestión de Masajistas"
        subtitle="Tú haces los masajes, nosotros ponemos los clientes"
      />

      {/* Main pitch */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-6 sm:p-8 text-white mb-8 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="text-6xl">🤝</div>
          <div>
            <h3 className="text-2xl font-extrabold mb-2">El argumento perfecto para captar masajistas</h3>
            <p className="text-emerald-100 text-lg font-medium">
              "Tú haces los masajes, nosotros ponemos los clientes. Comisión del 40% sobre un precio máximo de 60€. <strong className="text-white">Tú te llevas 36€ netos por sesión.</strong>"
            </p>
            <p className="text-emerald-200 text-sm mt-2">
              Sin inversión en marketing · Agenda controlada · Cobro garantizado · Flexibilidad total
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Recruitment channels */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-rose-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4">🔍 Cómo Encontrar Masajistas</h3>
          <div className="space-y-3">
            {recruitChannels.map((ch, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-rose-50 transition-colors group">
                <span className="text-2xl">{ch.icon}</span>
                <div>
                  <div className="font-semibold text-gray-800 text-sm group-hover:text-rose-600 transition-colors">{ch.channel}</div>
                  <div className="text-xs text-gray-400">{ch.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Value props for massagists */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-rose-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4">💎 Propuesta de Valor para Masajistas</h3>
          <div className="space-y-3">
            {valueProps.map((vp, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                <span className="text-xl">{vp.icon}</span>
                <span className="text-sm font-medium text-emerald-800">{vp.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legal agreement */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-rose-100">
        <h3 className="text-lg font-bold text-gray-800 mb-2">📜 Contrato de Colaboración Mercantil</h3>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 flex gap-3">
          <span className="text-xl">⚠️</span>
          <p className="text-sm text-amber-800">
            Las masajistas deben estar dadas de alta como <strong>autónomas</strong> y firmar un{" "}
            <strong>contrato de colaboración mercantil</strong> para evitar problemas laborales.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {legalPoints.map((lp, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-xl">{lp.icon}</span>
              <div>
                <div className="font-bold text-gray-800 text-sm">{lp.title}</div>
                <div className="text-xs text-gray-500 mt-0.5">{lp.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
