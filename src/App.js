import './App.css';
import Home from './components/Home';
import TodaysWalks from './components/TodaysWalks';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import ViewPack from './components/ViewPack';
import AddNewDog from './components/AddNewDog';
import PageNavLinks from './components/PageNavLinks';
import UserAndLogout from './components/UserAndLogout';

function App() {
  const [dogs, setDogs] = useState([])
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() => {
      fetch('http://localhost:3000/users')
      .then((resp) => resp.json())
      .then((data) => setUsers(data))
  },[])

  useEffect(() => {
    fetch('http://localhost:3000/dogs')
      .then((resp) => resp.json())
      .then((data) => setDogs(data))
  },[])

  function addDog(newDog) {
    setDogs([...dogs, newDog])
  }

  function handleSetCurrentUser(user) {
    setCurrentUser(user)
  }

  if (currentUser === false) return <Home setCurrentUser={handleSetCurrentUser} users={users} />

  return (
    <div>
      <PageNavLinks />
      <UserAndLogout setCurrentUser={handleSetCurrentUser} currentUser={currentUser} />
      <Switch>
        <Route path="/viewpack">
          <ViewPack dogs={dogs} />
        </Route>
        <Route path="/addnewdog">
          <AddNewDog addDog={addDog} dogs={dogs} />
        </Route>
        <Route path="/">
          <TodaysWalks currentUser={currentUser} dogs={dogs} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
