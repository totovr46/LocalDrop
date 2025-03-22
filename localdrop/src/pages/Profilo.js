import React from "react";

const Profilo = () => {
  return (
    <div className="profilo-container">
      <h1>Il tuo profilo</h1>
      
      <div className="profilo-card">
        <div className="profilo-info">
          <div className="profilo-avatar">U</div>
          <div>
            <div className="profilo-nome">Utente</div>
            <div>utente@example.com</div>
          </div>
        </div>
        
        <h3>I tuoi ordini</h3>
        <div>
          <p>Non hai ancora effettuato ordini</p>
          <button className="bottone-categoria" style={{marginTop: "10px"}}>
            Inizia lo shopping
          </button>
        </div>
      </div>
      
      <div className="profilo-card">
        <h3>Impostazioni</h3>
        <div>
          <p>Indirizzo di consegna</p>
          <p>Metodi di pagamento</p>
          <p>Notifiche</p>
          <p>Assistenza</p>
        </div>
      </div>
    </div>
  );
};

export default Profilo;