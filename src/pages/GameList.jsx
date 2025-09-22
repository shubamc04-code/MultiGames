import { Link } from "react-router-dom";
import games from "../data/games";
import "./GameList.css";

export default function GameList() {
  return (
    <div className="game-list-container">
      <h1 className="title">🎮 Game Selection</h1>
      <div className="game-grid">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.image} alt={game.name} className="game-image" />
            <h2 className="game-name">{game.name}</h2>
            <p className="game-info">Type: {game.type}</p>
            <p className="game-info">Players: {game.players}</p>
            <Link to={`/game/${game.id}`}>
              <button className="start-btn">▶ Start</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
