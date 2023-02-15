import './App.css';
import Home from './components/Home';
import TodaysWalks from './components/TodaysWalks';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import ViewPack from './components/ViewPack';
import AddNewDog from './components/AddNewDog';

function App() {
  const [loggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  function setLoggedIn() {
    setIsLoggedIn(true)
  }
  function setLoggedOut() {
    setIsLoggedIn(false)
  }
  function setUser(user) {
    setCurrentUser(user.name)
    console.log("Current User:", user)
  }

  if (loggedIn === false) return <Home setUser={setUser} setLoggedIn={setLoggedIn} />


  // restful route would be /dogs/new


  return (
    <div>
      <Switch>
        <Route path="/viewpack">
          <ViewPack setLoggedOut={setLoggedOut} currentUser={currentUser}/>
        </Route>
        <Route path="/addnewdog">
          <AddNewDog setLoggedOut={setLoggedOut} currentUser={currentUser}/>
        </Route>
        <Route path="/">
          <TodaysWalks setLoggedOut={setLoggedOut} currentUser={currentUser}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
