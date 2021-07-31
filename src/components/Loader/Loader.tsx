import { CardGrid } from "../SongTable/SongTable.styles";
import { LoaderItem } from "./LoaderItem";

const Loader = () => {
  return (
    <CardGrid>
      <LoaderItem />
      <LoaderItem />
      <LoaderItem />
      <LoaderItem />
    </CardGrid>
  );
};

export default Loader;
