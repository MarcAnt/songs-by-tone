import { SongsType } from "./SongSearch";
import SongTable from "./SongTable";

const SongDetails = ({ matches }: { matches: SongsType }) => {
  return <SongTable matches={matches} />;
};

export default SongDetails;
