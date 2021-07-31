import { SongsType } from "./SongSearch/SongSearch";
import SongTable from "./SongTable/SongTable";

const SongDetails = ({ matches }: { matches: SongsType }) => {
  return <SongTable matches={matches} />;
};

export default SongDetails;
