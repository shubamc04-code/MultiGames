import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameList from "./pages/GameList";
import GamePage from "./pages/GamePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameList />} />
        <Route path="/game/:id" element={<GamePage />} />
      </Routes>
    </Router>
  );
}
