import { SongsType } from "@components/SongSearch/SongSearch";
import SongTable from "@components/SongTable/SongTable";

const SongDetails = ({
  matches,
  scrollInfiniteRef,
}: {
  matches: SongsType;
  scrollInfiniteRef: React.RefObject<HTMLDivElement>;
}) => {
  return <SongTable matches={matches} scrollInfiniteRef={scrollInfiniteRef} />;
};

export default SongDetails;
