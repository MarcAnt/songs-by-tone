import { Route, Switch } from "react-router-dom";
import { SelectedInputProvider } from "@context/inputSelectedContext";
import { SongForm } from "@components/SongForm/SongForm";
import { SongSearch } from "@components/SongSearch/SongSearch";

import Error404 from "@pages/Error404";

const Home = (): JSX.Element => {
  return (
    <main>
      <SelectedInputProvider>
        <Switch>
          <Route exact path="/" component={SongSearch} />
          <Route exact path="/create" component={SongForm} />
          <Route path="*" component={Error404} />
        </Switch>
      </SelectedInputProvider>
    </main>
  );
};

export default Home;
