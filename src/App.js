import { NavLink, Route } from 'react-router-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Fourtet from './views/fourtet';
import Main from './views/main';
import Movies from './views/movies';
import Shopping from './views/shopping';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavLink to="/fourtet">fourtet</NavLink>
        <br></br>
        <NavLink to="/shopping">shopping</NavLink>
        <br></br>
        <NavLink to="/movies">movies</NavLink>
        <br></br>
        <NavLink to="/">main</NavLink>
        <br></br>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/shopping">
            <Shopping />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/Fourtet">
            <Fourtet />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/Movies">
            <Movies />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
