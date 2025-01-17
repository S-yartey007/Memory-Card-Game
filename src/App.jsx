import { useState } from "react";
import Scoreboard from "./components/Scoreboard.jsx";
import CardGrid from "./components/CardGrid.jsx";
import "./App.css";

function App() {
  const pokemons = [
    "Pikachu",
    "Bulbasaur",
    "Charmander",
    "Squirtle",
    "Jigglypuff",
    "Meowth",
    "Eevee",
    "Snorlax",
    "Gengar",
    "Psyduck",
    "Mewtwo",
    "Dragonite",
    "Charizard",
    "Lucario",
    "Vulpix",
  ];
  const [scores, setScores] = useState({ currentScore: 0, bestScore: 0 });
  function updateScores() {
    if (scores.currentScore > scores.bestScore) {
      setScores({ ...scores, bestScore: scores.currentScore });
    }
  }
  return (
    <>
      <Scoreboard pokemons={pokemons} />
    </>
  );
}

export default App;
