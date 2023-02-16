import './App.css';
import Home from './components/Home';
import TodaysWalks from './components/TodaysWalks';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import ViewPack from './components/ViewPack';
import AddNewDog from './components/AddNewDog';

function App() {
  const [loggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [currentDogArray, setCurrentDogArr] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/dogs')
      .then((resp) => resp.json())
      .then((data) => setCurrentDogArr(data))
  },[])

  function updateCurrentDogArr(newDog) {
    setCurrentDogArr([...currentDogArray, newDog])
  }

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
          <ViewPack dogs={currentDogArray} setLoggedOut={setLoggedOut} currentUser={currentUser} />
        </Route>
        <Route path="/addnewdog">
          <AddNewDog updateCurrentDogArr={updateCurrentDogArr} dogs={currentDogArray} setLoggedOut={setLoggedOut} currentUser={currentUser} />
        </Route>
        <Route path="/">
          <TodaysWalks dogs={currentDogArray} setLoggedOut={setLoggedOut} currentUser={currentUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
