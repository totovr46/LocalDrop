import React from "react";
import { useParams, Link } from "react-router-dom";
import prodotti from "../data/prodotti";

const Sottocategoria = () => {
  const { categoria, sottocategoria } = useParams();

  // Filtra i prodotti per sottocategoria
  const prodottiFiltrati = prodotti[categoria]?.filter(
    p => p.sottocategoria && p.sottocategoria.toLowerCase() === sottocategoria.toLowerCase()
  ) || [];

  return (
    <div className="sottocategoria-container">
      <h1>{sottocategoria.charAt(0).toUpperCase() + sottocategoria.slice(1)}</h1>
      
      <input 
        type="text" 
        className="search-bar" 
        placeholder={`🔍  Cerca in "${sottocategoria}"`} 
      />

      <h2 style={{ color: "white" }}>Prodotti più cercati</h2>
      <div className="prodotti-grid">
        {prodottiFiltrati.map(prodotto => (
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

export default Sottocategoria;