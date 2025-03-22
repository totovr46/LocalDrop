import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for Leaflet marker icons issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
});

const Mappa = () => {
  const [storeData, setStoreData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [center] = useState([45.4642, 9.1900]); // Default to Milan, Italy coordinates

  useEffect(() => {
    // In a real app, you would fetch this data from your API
    // For now, we'll use mock data based on your existing stores
    const mockStoreData = [
      { 
        id: 1, 
        nome: "Negozio 1", 
        rating: 4, 
        immagine: "/assets/negozio1.png", 
        position: [45.4662, 9.1870], 
        distanza: 0.5,
        categoria: "abbigliamento"
      },
      { 
        id: 2, 
        nome: "Negozio 2", 
        rating: 5, 
        immagine: "/assets/negozio2.png", 
        position: [45.4652, 9.1880], 
        distanza: 0.8,
        categoria: "abbigliamento"
      },
      { 
        id: 5, 
        nome: "Edicola", 
        rating: 4, 
        immagine: "/assets/edicola.png", 
        position: [45.4612, 9.1890], 
        distanza: 1.2,
        categoria: "casa"
      },
      { 
        id: 6, 
        nome: "Ferramenta X", 
        rating: 5, 
        immagine: "/assets/ferramentaX.png", 
        position: [45.4612, 9.1926], 
        distanza: 1.5,
        categoria: "casa"
      },
      {
        id: 9,
        nome: "Farmacia 1",
        rating: 4,
        immagine: "/assets/farmacia1.png",
        position: [45.4622, 9.1880],
        distanza: 0.7,
        categoria: "farmacia"
      },
      {
        id: 13,
        nome: "Elettronica 1",
        rating: 4,
        immagine: "/assets/elettronica1.png",
        position: [45.4672, 9.1930],
        distanza: 0.9,
        categoria: "elettronica"
      }
    ];

    setStoreData(mockStoreData);
  }, []);

  // Filter stores based on search query
  const filteredStores = storeData.filter(store => 
    store.nome.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort stores by proximity
  const sortedStores = [...filteredStores].sort((a, b) => a.distanza - b.distanza);

  // Handler for search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Render star ratings
  const renderRating = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="mappa-container">
      <h1>Cerca negozi vicini</h1>
      
      <input 
        type="text" 
        className="search-bar" 
        placeholder="Cerca negozi per nome" 
        value={searchQuery}
        onChange={handleSearchChange}
      />
      
      <div className="mappa-view" style={{
        height: "400px",
        margin: "15px",
        borderRadius: "10px",
        overflow: "hidden" // Important for map rendering
      }}>
        <MapContainer 
          center={center} 
          zoom={15} 
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {filteredStores.map((store) => (
            <Marker key={store.id} position={store.position}>
              <Popup>
                <div style={{ textAlign: "center" }}>
                  <strong>{store.nome}</strong>
                  <div style={{ color: "gold" }}>{renderRating(store.rating)}</div>
                  <div>{store.distanza} km</div>
                  <Link 
                    to={`/negozio/${store.id}`}
                    style={{
                      display: "block",
                      marginTop: "8px",
                      padding: "5px 10px",
                      backgroundColor: "#FF5C5C",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "15px",
                      textAlign: "center"
                    }}
                  >
                    Vedi negozio
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      
      <div className="negozi-vicini">
        <h2 style={{ color: "white", marginLeft: "15px" }}>Negozi vicini a te</h2>
        <div className="negozi-grid">
          {sortedStores.slice(0, 4).map((store) => (
            <Link 
              to={`/negozio/${store.id}`} 
              key={store.id} 
              className="negozio-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img 
                src={store.immagine} 
                alt={store.nome} 
                style={{ 
                  width: "130px", 
                  height: "130px", 
                  objectFit: "contain" 
                }} 
              />
              <div>{store.nome}</div>
              <div className="negozio-rating">{renderRating(store.rating)}</div>
              <div>{store.distanza} km</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mappa;