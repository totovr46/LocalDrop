

// 7. Aggiorna il file prodotti.js per includere sottocategorie
const prodotti = {
  abbigliamento: [
    { 
      id: 1, 
      nome: "Camicia", 
      prezzo: 38.99, 
      immagine: "/assets/camicia.png", 
      descrizione: "Camicia di cotone 100%.",
      sottocategoria: "uomo" 
    },
    { 
      id: 12, 
      nome: "Pantaloni", 
      prezzo: 29.99, 
      immagine: "/assets/pantaloni.png", 
      descrizione: "Jeans slim fit.",
      sottocategoria: "uomo" 
    },
    { 
      id: 13, 
      nome: "Mutande", 
      prezzo: 9.99, 
      immagine: "/assets/mutande.png", 
      descrizione: "Boxer in cotone.",
      sottocategoria: "uomo" 
    },
    { 
      id: 14, 
      nome: "Calze", 
      prezzo: 7.99, 
      immagine: "/assets/calze.png", 
      descrizione: "Calze di cotone, confezione da 3.",
      sottocategoria: "uomo" 
    },
    
    { 
      id: 19, 
      nome: "Vestito Elegante", 
      prezzo: 49.99, 
      immagine: "/assets/vestito.png", 
      descrizione: "Vestito elegante da sera, tessuto morbido e confortevole.",
      sottocategoria: "donna" 
    },
    { 
      id: 20, 
      nome: "Borsa a Tracolla", 
      prezzo: 34.99, 
      immagine: "/assets/borsa.png", 
      descrizione: "Borsa a tracolla in ecopelle con chiusura magnetica.",
      sottocategoria: "donna" 
    },
    { 
      id: 21, 
      nome: "Felpa con Cappuccio", 
      prezzo: 39.99, 
      immagine: "/assets/felpa.png", 
      descrizione: "Felpa unisex con cappuccio, perfetta per il tempo libero.",
      sottocategoria: "unisex" 
    },
    { 
      id: 22, 
      nome: "Occhiali da Sole", 
      prezzo: 19.99, 
      immagine: "/assets/occhiali.png", 
      descrizione: "Occhiali da sole con protezione UV400.",
      sottocategoria: "unisex" 
    },
    { 
      id: 23, 
      nome: "T-shirt Colorata", 
      prezzo: 14.99, 
      immagine: "/assets/tshirt.png", 
      descrizione: "T-shirt per bambini in cotone organico.",
      sottocategoria: "bambino" 
    },
    { 
      id: 24, 
      nome: "Scarpe da Bambino", 
      prezzo: 29.99, 
      immagine: "/assets/scarpe.png", 
      descrizione: "Scarpe leggere e resistenti.",
      sottocategoria: "bambino" 
    }
    
    
  ],
  casa: [
    { 
      id: 5, 
      nome: "Lampadina LED", 
      prezzo: 9.99, 
      immagine: "/assets/lampadina.png", 
      descrizione: "Lampadina LED Z - 7W, Luce Calda, Attacco E27 (Perfetta per cucina e soggiorno). Equivalente a 60W di una lampadina classica. Garantisce una illuminazione eccellente riducendo i consumi fino all'80% rispetto alle lampadine tradizionali.",
      sottocategoria: "ferramenta" 
    },
    { 
      id: 15, 
      nome: "Vite X", 
      prezzo: 2.99, 
      immagine: "/assets/vite.png", 
      descrizione: "Viti autofilettanti per legno.",
      sottocategoria: "ferramenta" 
    },
    { 
      id: 16, 
      nome: "Dado Y", 
      prezzo: 1.99, 
      immagine: "/assets/dado.png", 
      descrizione: "Dadi esagonali in acciaio.",
      sottocategoria: "ferramenta" 
    },
    { 
      id: 17, 
      nome: "Cacciavite T", 
      prezzo: 6.99, 
      immagine: "/assets/cacciavite.png", 
      descrizione: "Cacciavite multiuso.",
      sottocategoria: "ferramenta" 
    },
    { 
      id: 18, 
      nome: "Trapano", 
      prezzo: 45.99, 
      immagine: "/assets/trapano.png", 
      descrizione: "Trapano elettrico 800W.",
      sottocategoria: "ferramenta" 
    },
    { 
      id: 25, 
      nome: "Blocco Appunti", 
      prezzo: 3.99, 
      immagine: "/assets/blocco.png", 
      descrizione: "Blocco per appunti formato A4, 100 pagine.",
      sottocategoria: "cancelleria" 
    },
    { 
      id: 26, 
      nome: "Penne", 
      prezzo: 5.99, 
      immagine: "/assets/penne.png", 
      descrizione: "Penne blu o nere.",
      sottocategoria: "cancelleria" 
    },
    { 
      id: 27, 
      nome: "Giornale Quotidiano", 
      prezzo: 1.50, 
      immagine: "/assets/giornale.png", 
      descrizione: "Edizione odierna del principale quotidiano nazionale.",
      sottocategoria: "edicola" 
    },
    { 
      id: 28, 
      nome: "Rivista di Moda", 
      prezzo: 4.99, 
      immagine: "/assets/rivista.png", 
      descrizione: "Rivista mensile sulle ultime tendenze della moda.",
      sottocategoria: "edicola" 
    },
    { 
      id: 29, 
      nome: "Tazza", 
      prezzo: 12.99, 
      immagine: "/assets/tazza.png", 
      descrizione: "Tazza in ceramica.",
      sottocategoria: "regali" 
    },
    { 
      id: 30, 
      nome: "Collana", 
      prezzo: 49.99, 
      immagine: "/assets/collana.png", 
      descrizione: "Collana artigianale..",
      sottocategoria: "regali" 
    }  
  ],
  farmacia:[
    { 
      id: 35, 
      nome: "Paracetamolo 500mg", 
      prezzo: 3.99, 
      immagine: "/assets/paracetamolo.png", 
      descrizione: "Antidolorifico e antipiretico, confezione da 20 compresse.",
      sottocategoria: "medicinali" 
    },
    { 
      id: 36, 
      nome: "Dentifricio Sbiancante", 
      prezzo: 4.99, 
      immagine: "/assets/dentifricio.png", 
      descrizione: "Dentifricio al fluoro per denti più bianchi e sani.",
      sottocategoria: "igiene" 
    },
    { 
      id: 37, 
      nome: "Crema Idratante", 
      prezzo: 14.99, 
      immagine: "/assets/crema.png", 
      descrizione: "Crema idratante per il viso con aloe vera.",
      sottocategoria: "bellezza" 
    },
    { 
      id: 38, 
      nome: "Integratore Multivitaminico", 
      prezzo: 19.99, 
      immagine: "/assets/integratore.png", 
      descrizione: "Integratore con vitamine e minerali essenziali.",
      sottocategoria: "integratori" 
    }
  ], 
  elettronica:[
    { 
      id: 31, 
      nome: "Batterie AA (Confezione da 4)", 
      prezzo: 5.99, 
      immagine: "/assets/batterie.png", 
      descrizione: "Batterie alcaline ad alta durata.",
      sottocategoria: "batterie" 
  },
  { 
    id: 32, 
    nome: "Auricolari Wireless", 
    prezzo: 24.99, 
    immagine: "/assets/auricolari.png", 
    descrizione: "Auricolari Bluetooth con cancellazione del rumore.",
    sottocategoria: "auricolari" 
  },
  { 
    id: 33, 
    nome: "Cavo USB-C", 
    prezzo: 8.99, 
    immagine: "/assets/cavo.png", 
    descrizione: "Cavo di ricarica USB-C da 1 metro.",
    sottocategoria: "cavi" 
  },
  { 
    id: 34, 
    nome: "Caricatore Rapido", 
    prezzo: 19.99, 
    immagine: "/assets/caricatore.png", 
    descrizione: "Caricatore USB con ricarica rapida 20W.",
    sottocategoria: "accessori" 
  }
  
  
  
    
  ],



  popolari: [
    { id: 21, 
      nome: "Occhiali da sole",
      prezzo: 24.99, 
      immagine: "/assets/occhiali.png" ,
      descrizione: "Design Moderno e Distintivo,Visione di Alta Qualità,Protezione UV400,Adatto per Uomo e Donna."
    },
    { id: 22, 
      nome: "Scotch", 
      prezzo: 9.99, 
      immagine: "/assets/scotch.png",
      descrizione:"Nastro trasparente con forte forza adesiva.",
    },
  ]
};

export default prodotti;