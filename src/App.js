import { Route } from 'react-router-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Fourtet from './views/fourtet';
import Main from './views/main';
import Movies from './views/movies';
import Navbar from './views/navbar';
import Shopping from './views/shopping';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/shopping">
            <Shopping />
          </Route>
          <Route exact path="/Fourtet">
            <Fourtet />
          </Route>
          <Route exact path="/Movies">
            <Movies />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
