// 5. Aggiornamento della Home.js
import React from "react";
import { Link } from "react-router-dom";
import prodotti from "../data/prodotti";

const Home = () => {
  return (
    <div className="home-container">
      <div className="categorie-grid">
        <Link to="/categoria/abbigliamento" className="categoria-card">
          <span style={{ fontSize: '24px' }}>👕</span>
          <span>Abbigliamento</span>
        </Link>
        <Link to="/categoria/casa" className="categoria-card">
          <span style={{ fontSize: '24px' }}>🏠</span>
          <span>Casa</span>
        </Link>
        <Link to="/categoria/farmacia" className="categoria-card">
          <span style={{ fontSize: '24px' }}>💊</span>
          <span>Farmacia</span>
        </Link>
        <Link to="/categoria/elettronica" className="categoria-card">
          <span style={{ fontSize: '24px' }}>📱</span>
          <span>Elettronica</span>
        </Link>
      </div>
      <input type="text" className="search-bar" placeholder="🔍  Cerca prodotti locali" />

      <h2>Potrebbero Interessarti</h2>
      <div className="interessati-grid">
        {prodotti.popolari.map((prodotto) => (
          <Link to={`/prodotto/${prodotto.id}`} key={prodotto.id} className="prodotto-card">
            <img
              src={prodotto.immagine ? `${prodotto.immagine}` : "https://via.placeholder.com/100"}
              alt={prodotto.nome}
            />
            <p>{prodotto.nome}</p>
            <p className="prodotto-prezzo">{prodotto.prezzo.toFixed(2)}€</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;