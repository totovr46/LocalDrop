import React, { useContext } from "react";
import { CarrelloContext } from "../context/CarrelloContext";

function Carrello() {
  const { carrello, rimuoviDalCarrello, totale } = useContext(CarrelloContext);

  if (carrello.length === 0) {
    return <h2 style={{ textAlign: "center" }}>🛒 Il carrello è vuoto</h2>;
  }

  return (
    <div className="carrello-container">
      <h1>🛒 Il tuo carrello</h1>
      {carrello.map((prodotto, index) => (
        <div key={index} className="carrello-prodotto">
          <img src={prodotto.immagine} alt={prodotto.nome} />
          <h3>{prodotto.nome}</h3>
          <p>{prodotto.prezzo}€</p>
          <button className="btn-rimuovi" onClick={() => rimuoviDalCarrello(prodotto.id)}>🗑 Rimuovi</button>
        </div>
      ))}
      <h2 className="carrello-totale">💰 Totale: {totale.toFixed(2)}€</h2>
    </div>
  );
}

export default Carrello;
