import React, { useState, useEffect } from 'react';
import './CharmanderProfile.css';

const CharmanderProfile = () => {
  const charmander = {
    name: "Charmander",
    images: [
      "https://pa1.aminoapps.com/6547/d113002cc09220a2b15678eca77a98b59fe3b6ce_hq.gif",
      "https://i.pinimg.com/originals/d2/60/07/d26007ab6524f141ebd64ee1894af718.gif",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCNZvYXOLU4Thnbcy37CE7WaSWcOvswhW0-Y_scftwjs6IFGYG84gioCe1N96A5QpZQb5rEb0QlrmlD_TfOTL0leriqLxg5qnPhRY9TE-JSiE87cGg_0lfbDi8-wyX1JR0V8M9OynoEdM/s1600/Lan%C3%A7a_Chamas_de_Charmander.gif"
    ],
    synopsis: "Charmander é um Pokémon tipo Fogo. Ele é conhecido pela chama que queima na ponta de sua cauda, cuja intensidade indica suas emoções.",
    characteristics: {
      species: "Lizard Pokémon",
      height: "0.6 m",
      weight: "8.5 kg",
      abilities: "Blaze"
    },
    stats: {
      strength: 52,
      attack: 60,
      defense: 43,
      speed: 65,
      age: "2 anos"
    }
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % charmander.images.length);
    }, 3000); 

    return () => clearInterval(intervalId); 
  }, [charmander.images.length]);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-carousel">
          <img src={charmander.images[currentImageIndex]} alt={charmander.name} className="profile-carousel-image" />
        </div>
        <div className="profile-header">
          <h1 className="profile-name">{charmander.name}</h1>
        </div>
        <p className="profile-synopsis">{charmander.synopsis}</p>
        <div className="profile-grid">
          <div className="profile-section">
            <h2>Características</h2>
            <p>Espécie: {charmander.characteristics.species}</p>
            <p>Altura: {charmander.characteristics.height}</p>
            <p>Peso: {charmander.characteristics.weight}</p>
            <p>Habilidades: {charmander.characteristics.abilities}</p>
          </div>
          <div className="profile-section">
            <h2>Estatísticas</h2>
            <p>Força: {charmander.stats.strength}</p>
            <p>Ataque: {charmander.stats.attack}</p>
            <p>Defesa: {charmander.stats.defense}</p>
            <p>Velocidade: {charmander.stats.speed}</p>
            <p>Idade: {charmander.stats.age}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharmanderProfile;
