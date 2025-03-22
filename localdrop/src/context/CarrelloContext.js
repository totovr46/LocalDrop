import React, { createContext, useState } from "react";

export const CarrelloContext = createContext();

export const CarrelloProvider = ({ children }) => {
  const [carrello, setCarrello] = useState([]);

  const aggiungiAlCarrello = (prodotto) => {
    setCarrello([...carrello, prodotto]);
  };

  const rimuoviDalCarrello = (id) => {
    setCarrello(carrello.filter((prodotto) => prodotto.id !== id));
  };

  const totale = carrello.reduce((acc, prodotto) => acc + prodotto.prezzo, 0);

  return (
    <CarrelloContext.Provider value={{ carrello, aggiungiAlCarrello, rimuoviDalCarrello, totale }}>
      {children}
    </CarrelloContext.Provider>
  );
};
