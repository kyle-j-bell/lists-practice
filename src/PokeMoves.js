import { moves } from "./data.js";
import "./PokeMoves";
import PokeMoveCard from "./PokeMoveCard";

//Maps each entry of 'moves' to the PokeMoveCard component.
const PokeMoves = () => {
  return (
    <div>
      <h1>PokeMoves</h1>
      <ul>
        {moves.map((item) => (
          <PokeMoveCard key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default PokeMoves;
