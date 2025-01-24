import { useState } from "react";
import Card from "./Card";
function Scoreboard({ pokemons }) {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(currentScore);
  const [clickedPokemons, setIsClickedPokemons] = useState([]);
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
    setTimeout(() => {
      setRandomizedPokemon(shuffledArray);
    }, 300); // Update state with the shuffled array
  };

  const handleCardClick = (card) => {
    // Check if the card has been clicked before
    if (clickedPokemons.includes(card)) {
      // Update the best score if current score is higher
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      // Reset current score and clicked cards
      setCurrentScore(0);
      setIsClickedPokemons([]);
    } else {
      // Increase current score and add the card to clicked cards
      setCurrentScore((prev) => prev + 1);
      setIsClickedPokemons([...clickedPokemons, card]);
    }
    console.log("clicked");
  };

  return (
    <div>
      <p>Scoreboard: {currentScore}</p>
      <p>bestscore: {bestScore}</p>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {randomizedPokemon.map((pokemon) => {
          return (
            <Card
              key={pokemon}
              pokemon={pokemon.toLowerCase()}
              text={pokemon}
              randomise={shufflePokemon}
              onClick={() => handleCardClick(pokemon)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Scoreboard;
