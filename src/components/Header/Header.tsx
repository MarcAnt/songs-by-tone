import { HeaderWrapper } from "./Header.style";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <HeaderWrapper>
      <nav>
        <Link to="/">SongsByTone</Link>
        <Link className="create" to="/create">
          Crear Canción
        </Link>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
