import { Link, Route, Switch, HashRouter } from "react-router-dom";
import SongForm from "../components/SongForm";
import SongSearch from "../components/SongSearch";
import Error404 from "../Pages/Error404";

const Home = () => {
  return (
    <div>
      <HashRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link className="create" to="/create">
            Crear Canción
          </Link>
        </nav>
        <Switch>
          <Route exact path="/" component={SongSearch} />
          <Route exact path="/create" component={SongForm} />
          <Route path="*" component={Error404} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default Home;
