export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <span className="text-2xl">🌿</span>
            <span>MasajesHome</span>
          </div>
          <div className="flex gap-4 text-sm">
            {["Modelo", "Servicios", "Captación", "Finanzas", "KPIs"].map((item) => (
              <button
                key={item}
                onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-rose-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div>Plan de Negocio — Plataforma de Masajes a Domicilio para Mujeres · España · 2025</div>
          <div className="flex gap-3">
            <span className="bg-gray-800 px-3 py-1 rounded-full">📊 Documento interactivo</span>
            <span className="bg-rose-900/50 text-rose-400 px-3 py-1 rounded-full">✓ Listo para GitHub</span>
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-gray-600">
          Todos los datos son proyecciones estimadas con fines de planificación estratégica.
        </div>
      </div>
    </footer>
  );
}
