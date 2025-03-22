import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Categorie from "./pages/Categorie";
import Sottocategoria from "./pages/Sottocategoria";
import Negozio from "./pages/Negozio";
import Prodotto from "./pages/Prodotto";
import Carrello from "./pages/Carrello";
import Mappa from "./pages/Mappa";
import Profilo from "./pages/Profilo";
import Navbar from "./components/Navbar";
import { CarrelloProvider } from "./context/CarrelloContext";

/**
 * Cambia dinamicamente il colore della status bar (meta theme-color).
 */
function changeStatusBarColor(color) {
  let metaThemeColor = document.querySelector("meta[name=theme-color]");
  if (!metaThemeColor) {
    metaThemeColor = document.createElement("meta");
    metaThemeColor.name = "theme-color";
    document.head.appendChild(metaThemeColor);
  }
  metaThemeColor.content = color;
}

/**
 * Componente per aggiornare il colore della status bar in base alla pagina attuale.
 */
function StatusBarColorUpdater() {
  const location = useLocation();

  useEffect(() => {
    // Imposta il colore principale dell'app (#7389FF) per tutte le pagine
    changeStatusBarColor("#7389FF");
  }, [location]);

  return null; // Non renderizza nulla
}

function App() {
  return (
    <CarrelloProvider>
      <Router>
        <StatusBarColorUpdater /> {/* Attiva il cambio colore dinamico */}
        <div className="app-container" style={{ paddingBottom: "60px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria/:categoria" element={<Categorie />} />
            <Route path="/categoria/:categoria/:sottocategoria" element={<Sottocategoria />} />
            <Route path="/negozio/:id" element={<Negozio />} />
            <Route path="/prodotto/:id" element={<Prodotto />} />
            <Route path="/carrello" element={<Carrello />} />
            <Route path="/mappa" element={<Mappa />} />
            <Route path="/profilo" element={<Profilo />} />
          </Routes>

          <Navbar />
        </div>
      </Router>
    </CarrelloProvider>
  );
}

export default App;
