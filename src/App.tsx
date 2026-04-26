import { useState } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import BusinessModel from "./components/BusinessModel";
import Market from "./components/Market";
import Services from "./components/Services";
import ContentStrategy from "./components/ContentStrategy";
import WebReservations from "./components/WebReservations";
import Operations from "./components/Operations";
import MassagistManagement from "./components/MassagistManagement";
import LegalFiscal from "./components/LegalFiscal";
import ActionPlan from "./components/ActionPlan";
import Financials from "./components/Financials";
import KPIs from "./components/KPIs";
import Conclusion from "./components/Conclusion";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  return (
    <div className="min-h-screen bg-rose-50 font-sans">
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 pb-20">
        <BusinessModel />
        <Market />
        <Services />
        <ContentStrategy />
        <WebReservations />
        <Operations />
        <MassagistManagement />
        <LegalFiscal />
        <ActionPlan />
        <Financials />
        <KPIs />
        <Conclusion />
      </main>
      <Footer />
    </div>
  );
}
