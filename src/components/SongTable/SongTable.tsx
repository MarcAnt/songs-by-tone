import { SongsType } from "@components/SongSearch/SongSearch";
import SongCard from "@components/SongCard/SongCard";
import { CardGrid } from "./SongTable.styles";

const SongTable = ({
  matches,
  scrollInfiniteRef,
}: {
  matches: SongsType;
  scrollInfiniteRef: React.RefObject<HTMLDivElement>;
}) => {
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
      {matches.length > 10 && <div ref={scrollInfiniteRef}></div>}
      {/* <div ref={scrollInfiniteRef}></div> */}
    </CardGrid>
  );
};

export default SongTable;
