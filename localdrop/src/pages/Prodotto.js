import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import prodotti from "../data/prodotti";
import { CarrelloContext } from "../context/CarrelloContext";

function Prodotto() {
  const { id } = useParams();
  const { aggiungiAlCarrello } = useContext(CarrelloContext);
  
  // Trova il prodotto in tutte le categorie
  let prodotto = null;
  Object.keys(prodotti).forEach(categoria => {
    if (Array.isArray(prodotti[categoria])) {
      const trovato = prodotti[categoria].find(p => p.id === parseInt(id));
      if (trovato) prodotto = trovato;
    }
  });

  if (!prodotto) {
    return <h2>Prodotto non trovato</h2>;
  }

  // Per la lampadina, mostriamo specifiche dettagliate come nell'immagine
  const isLampadina = prodotto.nome.includes("Lampadina");

  // Simulazione di altri prodotti che potrebbero interessare
  const prodottiCorrelati = Object.values(prodotti)
    .flat()
    .filter(p => Array.isArray(p) ? false : p.id !== prodotto.id)
    .slice(0, 2);

  return (
    <div className="prodotto-dettaglio">
      <h1 className="prodotto-titolo">{prodotto.nome}</h1>
      <p className="prodotto-prezzo">{prodotto.prezzo.toFixed(2)}€</p>
      
      <img src={prodotto.immagine} alt={prodotto.nome} />
      
      <div className="prodotto-descrizione">
        {isLampadina ? (
          <>
            <p>Lampadina LED Z - 7W, Luce Calda, Attacco E27 (Perfetta per cucina e soggiorno). Equivalente a 60W di una lampadina classica. Garantisce una illuminazione eccellente riducendo i consumi fino all'80% rispetto alle lampadine tradizionali.</p>
            
            <div className="specs-container">
              <p className="specs-item">- Potenza: 7W (equivalente a 60W tradizionale)</p>
              <p className="specs-item">- Luce: 806 LUMEN • colore luce: calda, soffusa</p>
              <p className="specs-item">- Durata: 25.000 ore</p>
              <p className="specs-item">- Consumo energetico: Classe A+</p>
              <p className="specs-item">- Attacco: E27 standard</p>
              <p className="specs-item">- Risparmio energetico: Classe A+</p>
            </div>
          </>
        ) : (
          <p>{prodotto.descrizione}</p>
        )}
      </div>
      
      <div className="consegna-box">
        Consegna: 15-30min
      </div>
      
      <button 
        className="btn-aggiungi" 
        onClick={() => aggiungiAlCarrello(prodotto)}
      >
        Aggiungi al Carrello
      </button>
      
      <h3>Potrebbero interessarti</h3>
      <div className="interessati-grid">
        {prodottiCorrelati.map(p => (
          <Link to={`/prodotto/${p.id}`} key={p.id} className="prodotto-card">
            <img src={p.immagine} alt={p.nome} />
            <p>{p.nome}</p>
            <p className="prodotto-prezzo">{p.prezzo.toFixed(2)}€</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Prodotto;