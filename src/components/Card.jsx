import { useState, useEffect } from "react";

function Card({ pokemon, text, randomise, onClick }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        let response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        );
        if (!response.ok) throw new Error();
        let data = await response.json();
        setImageUrl(data.sprites.front_default);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPokemon();
  }, [pokemon]);

  return (
    <div
      onClick={() => {
        onClick();
        randomise();
      }}
      style={{
        margin: "10px",
        border: "1px solid black",
        display: "flex",
        borderRadius: "10px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <img src={imageUrl} alt="This is an image card" />
      <p>{text}</p>
    </div>
  );
}

export default Card;
