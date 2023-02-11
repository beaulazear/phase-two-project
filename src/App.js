import './App.css';
import Home from './components/Home';
import TodaysWalks from './components/TodaysWalks';
import { useState } from 'react';
import PageNavLinks from './components/PageNavLinks';
import { Route, Switch } from 'react-router-dom';
import ViewPack from './components/ViewPack';

function App() {
  const [loggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  function setLoggedIn(e) {
    setIsLoggedIn(true)
  }
  function setLoggedOut() {
    setIsLoggedIn(false)
  }
  function setUser(user) {
    setCurrentUser(user)
  }

  if (loggedIn === false) return <Home setUser={setUser} setLoggedIn={setLoggedIn} />

  return (
    <div>
      <Switch>
        <Route path="/viewpack">
          <PageNavLinks setLoggedOut={setLoggedOut}/>
          <ViewPack currentUser={currentUser}/>
        </Route>
        <Route path="/">
          <PageNavLinks setLoggedOut={setLoggedOut} />
          <TodaysWalks currentUser={currentUser}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
