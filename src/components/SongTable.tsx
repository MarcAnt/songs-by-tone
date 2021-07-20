import { SongsType } from "./SongSearch";
import SongCard from "./SongCard";

const SongTable = ({ matches }: { matches: SongsType }) => {
  return (
    <div className="card-grid">
      {matches.length > 0 &&
        matches.map((match, index) => (
          <SongCard
            key={index}
            names={match.name}
            chords={match.chords}
            tones={match.tones}
          />
        ))}
    </div>
  );
};

export default SongTable;
