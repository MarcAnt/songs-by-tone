import { HeaderWrapper } from "./Header.style";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  let location = useLocation();

  return (
    <HeaderWrapper>
      <nav>
        <Link to="/">SongsByTone</Link>

        {location.pathname === "/" ? (
          <Link className="create" to="/create">
            Crear Canción
          </Link>
        ) : (
          <Link className="create" to="/">
            Buscar Canción
          </Link>
        )}
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
