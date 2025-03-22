// 6. Aggiornamento di Categorie.js
import React from "react";
import { useParams, Link } from "react-router-dom";

const Categorie = () => {
  const { categoria } = useParams();

  // Sottocategorie
  const sottocategorie = {
    abbigliamento: ["Donna", "Uomo", "Unisex", "Bambino"],
    casa: ["Ferramenta", "Cancelleria", "Edicola", "Regali"],
    elettronica: ["Batterie", "Auricolari", "Cavi", "Accessori"],
    farmacia: ["Medicinali", "Igiene", "Bellezza", "Integratori"]
  };

  // Negozi in evidenza con percorsi delle immagini
  const negozi = {
    abbigliamento: [
      { id: 1, nome: "Negozio 1", rating: 4, immagine: "assets/negozio1.png" },
      { id: 2, nome: "Negozio 2", rating: 5, immagine: "assets/negozio2.png" },
      { id: 3, nome: "Negozio 3", rating: 3, immagine: "assets/negozio3.png" },
      { id: 4, nome: "Negozio 4", rating: 4, immagine: "assets/negozio4.png" }
    ],
    casa: [
      { id: 5, nome: "Edicola", rating: 4, immagine: "assets/edicola.png" },
      { id: 6, nome: "Ferramenta X", rating: 5, immagine: "assets/ferramentaX.png" },
      { id: 7, nome: "Cartoleria Z", rating: 4, immagine: "assets/cartoleria.png" },
      { id: 8, nome: "Negozio S", rating: 5, immagine: "assets/negozio5.png" }
    ],
    farmacia: [
      { id: 9, nome: "Farmacia 1", rating: 4, immagine: "assets/farmacia1.png" },
      { id: 10, nome: "Farmacia 2", rating: 5, immagine: "assets/farmacia2.png" },
      { id: 11, nome: "Farmacia 3", rating: 4, immagine: "assets/farmacia3.png" },
      { id: 12, nome: "Farmacia 4", rating: 5, immagine: "assets/farmacia4.png" }
    ],
    elettronica: [
      { id: 13, nome: "EuroMondo", rating: 4, immagine: "assets/elettronica1.png" },
      { id: 14, nome: "LadyElec", rating: 5, immagine: "assets/elettronica2.png" },
      { id: 15, nome: "TecnoSmart", rating: 4, immagine: "assets/elettronica3.png" },
      { id: 16, nome: "PhoneMi", rating: 5, immagine: "assets/elettronica4.png" }
    ]
  };

  return (
    <div className="categoria-container">
      <h1>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h1>

      <div className="sottocategorie-grid">
        {sottocategorie[categoria]?.map((sottocat) => (
          <Link 
            key={sottocat} 
            to={`/categoria/${categoria}/${sottocat.toLowerCase()}`}
            className="sottocategoria-btn"
          >
            {sottocat}
          </Link>
        ))}
      </div>

      <input 
        type="text" 
        className="search-bar" 
        placeholder={`🔍  Cerca prodotti tra ${categoria}`} 
      />

      <h2 style={{ color: "white" }}>Negozi in evidenza</h2>
      <div className="negozi-grid">
        {negozi[categoria]?.map((negozio) => (
          <Link to={`/negozio/${negozio.id}`} key={negozio.id} className="negozio-card">
            <img 
              src={`/${negozio.immagine}`} 
              alt={negozio.nome} 
              className="negozio-immagine" 
            />
            <div className="negozio-info">
              <div className="negozio-nome">{negozio.nome}</div>
              <div className="negozio-rating">
                {"★".repeat(negozio.rating) + "☆".repeat(5 - negozio.rating)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categorie;