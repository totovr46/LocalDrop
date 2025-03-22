import React from "react";
import { useParams, Link } from "react-router-dom";
import prodotti from "../data/prodotti";

const negozi = {
  abbigliamento: [
    { id: 1, nome: "Negozio 1", rating: 4, immagine: "/assets/negozio1.png" },
    { id: 2, nome: "Negozio 2", rating: 5, immagine: "/assets/negozio2.png" },
    { id: 3, nome: "Negozio 3", rating: 3, immagine: "/assets/negozio3.png" },
    { id: 4, nome: "Negozio 4", rating: 4, immagine: "/assets/negozio4.png" }
  ],
  casa: [
    { id: 5, nome: "Edicola", rating: 4, immagine: "/assets/edicola.png" },
    { id: 6, nome: "Ferramenta X", rating: 5, immagine: "/assets/ferramentaX.png" },
    { id: 7, nome: "Cartoleria Z", rating: 4, immagine: "/assets/cartoleria.png" },
    { id: 8, nome: "Negozio S", rating: 5, immagine: "/assets/negozio5.png" }
  ],
  farmacia: [
    { id: 9, nome: "Farmacia 1", rating: 4, immagine: "/assets/farmacia1.png" },
    { id: 10, nome: "Farmacia 2", rating: 5, immagine: "/assets/farmacia2.png" },
    { id: 11, nome: "Farmacia 3", rating: 4, immagine: "/assets/farmacia3.png" },
    { id: 12, nome: "Farmacia 4", rating: 5, immagine: "/assets/farmacia4.png" }
  ],
  elettronica: [
    { id: 13, nome: "EuroMondo", rating: 4, immagine: "/assets/elettronica1.png" },
    { id: 14, nome: "LadyElec", rating: 5, immagine: "/assets/elettronica2.png" },
    { id: 15, nome: "TecnoSmart", rating: 4, immagine: "/assets/elettronica3.png" },
    { id: 16, nome: "PhoneMi", rating: 5, immagine: "/assets/elettronica4.png" }
  ]
};

const Negozio = () => {
  const { id } = useParams();
  
  // Trova il negozio giusto scorrendo tutte le categorie
  let negozio = null;
  let categoriaNegozio = null;
  for (const categoria in negozi) {
    negozio = negozi[categoria].find(n => n.id === parseInt(id));
    if (negozio) {
      categoriaNegozio = categoria;
      break;
    }
  }

  if (!negozio) {
    return <h2>Negozio non trovato</h2>;
  }

  // Filtra i prodotti in base alla categoria del negozio
  const prodottiNegozio = prodotti[categoriaNegozio] || [];

  return (
    <div className="negozio-container">
     <div className="negozio-header">
    <div className="negozio-info">
      <img src={negozio.immagine} alt={negozio.nome} className="negozio-img" />
      <div className="negozio-rating">
        {"★".repeat(negozio.rating) + "☆".repeat(5 - negozio.rating)}
      </div>
    </div>
    <h1>{negozio.nome}</h1>
    <div className="icons">
      <img src="/assets/chat.png" alt="Chat" className="icon" />
      <img src="/assets/phone.png" alt="Telefono" className="icon" />
    </div>
  </div>

      <input 
        type="text" 
        className="search-bar" 
        placeholder={`🔍  Cerca prodotti nel negozio`} 
      />

      <h2>Catalogo Negozio</h2>
      
      <div className="prodotti-grid">
        {prodottiNegozio.slice(0, 4).map(prodotto => (
          <Link to={`/prodotto/${prodotto.id}`} key={prodotto.id} className="prodotto-card">
            <img src={prodotto.immagine} alt={prodotto.nome} />
            <p>{prodotto.nome}</p>
            <p className="prodotto-prezzo">{prodotto.prezzo.toFixed(2)}€</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Negozio;
