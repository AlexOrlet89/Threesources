import { Route } from 'react-router-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Fourtet from './views/fourtet';
import Movies from './views/movies';
import Shopping from './views/shopping';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
