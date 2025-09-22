import { useParams, Link } from "react-router-dom";
import games from "../data/games";
import "./GamePage.css";

export default function GamePage() {
  const { id } = useParams();
  const game = games.find((g) => g.id === Number(id));

  if (!game) {
    return (
      <div className="game-not-found">
        <h1>Game not found</h1>
      </div>
    );
  }

  return (
    <div className="game-page">
      <img src={game.image} alt={game.name} className="game-banner" />
      <h1 className="game-title">{game.name}</h1>
      <p className="game-detail">Game Type: {game.type}</p>
      <p className="game-detail">Players Allowed: {game.players}</p>
      <p className="game-description">{game.description}</p>
      
     <button className="play-btn" onClick={() => alert(`Starting ${game.name}...`)}>
  🚀 Start Game
   </button>


      <Link to="/" className="back-link">
        ⬅ Back to Game Selection
      </Link>
    </div>
  );
}
