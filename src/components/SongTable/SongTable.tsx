import { SongsType } from "../SongSearch/SongSearch";
import SongCard from "../SongCard/SongCard";
import { CardGrid } from "./SongTable.styles";

const SongTable = ({ matches }: { matches: SongsType }) => {
  return (
    <CardGrid>
      {matches.length > 0 &&
        matches.map((match, index) => (
          <SongCard
            key={index}
            names={match.name}
            chords={match.chords}
            tones={match.tones}
          />
        ))}
    </CardGrid>
  );
};

export default SongTable;
