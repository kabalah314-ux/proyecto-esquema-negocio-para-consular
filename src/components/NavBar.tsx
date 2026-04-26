import { useState, useEffect } from "react";

const navItems = [
  { id: "modelo", label: "Modelo" },
  { id: "mercado", label: "Mercado" },
  { id: "servicios", label: "Servicios" },
  { id: "captacion", label: "Captación" },
  { id: "web", label: "Web" },
  { id: "operaciones", label: "Operaciones" },
  { id: "masajistas", label: "Masajistas" },
  { id: "legal", label: "Legal" },
  { id: "plan", label: "Plan de Acción" },
  { id: "finanzas", label: "Finanzas" },
  { id: "kpis", label: "KPIs" },
];

export default function NavBar({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: (s: string) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        <button
          onClick={() => scrollTo("inicio")}
          className="flex items-center gap-2 font-bold text-rose-600 text-lg tracking-tight"
        >
          <span className="text-2xl">🌿</span>
          <span className="hidden sm:inline">MasajesHome</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-rose-500 text-white shadow"
                  : "text-gray-600 hover:bg-rose-100 hover:text-rose-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-rose-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1">
            <span className={`block w-5 h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur border-t border-rose-100 px-4 py-3 grid grid-cols-3 gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="px-2 py-2 rounded-lg text-xs font-semibold text-center bg-rose-50 text-rose-700 hover:bg-rose-500 hover:text-white transition-all"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
