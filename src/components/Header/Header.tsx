import { Link, useLocation } from "react-router-dom";

import { HeaderWrapper } from "./Header.style";

export const Header = (): JSX.Element => {
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
