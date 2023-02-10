import './App.css';
import Home from './components/Home';
import TodaysWalks from './components/TodaysWalks';
import { useState } from 'react';
import PageNavLinks from './components/PageNavLinks';
import { Route, Switch } from 'react-router-dom';
import ViewPack from './components/ViewPack';

function App() {
  const [loggedIn, setIsLoggedIn] = useState(false)

  function setLoggedIn() {
    setIsLoggedIn(true)
  }
  function setLoggedOut() {
    setIsLoggedIn(false)
  }

  if (loggedIn === false) return <Home setLoggedIn={setLoggedIn} />

  return (
    <div>
      <Switch>
        <Route path="/viewpack">
          <PageNavLinks />
          <ViewPack />
        </Route>
        <Route path="/">
          <PageNavLinks setLoggedOut={setLoggedOut} />
          <TodaysWalks />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
