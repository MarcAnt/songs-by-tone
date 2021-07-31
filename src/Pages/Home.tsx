import { Route, Switch } from "react-router-dom";
import SongForm from "../components/SongForm/SongForm";
import SongSearch from "../components/SongSearch/SongSearch";
import Error404 from "../Pages/Error404";

const Home = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={SongSearch} />
        <Route exact path="/create" component={SongForm} />
        <Route path="*" component={Error404} />
      </Switch>
    </main>
  );
};

export default Home;
