import { useState } from "react";
import Card from "./Card";
function CardGrid({ pokemons }) {
  // State to hold the randomized list of Pokémon names
  const [randomizedPokemon, setRandomizedPokemon] = useState(pokemons);

  // Function to shuffle the Pokémon names
  const shufflePokemon = () => {
    const shuffledArray = [...randomizedPokemon]; // Create a copy of the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generate random index
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]; // Swap elements
    }
    setRandomizedPokemon(shuffledArray); // Update state with the shuffled array
  };

  return (
    <div>
      {randomizedPokemon.map((pokemon) => {
        return (
          <Card
            key={pokemon}
            pokemon={pokemon.toLowerCase()}
            text={pokemon}
            randomise={shufflePokemon}
          />
        );
      })}
    </div>
  );
}

export default CardGrid;
