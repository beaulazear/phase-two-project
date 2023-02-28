import './App.css';
import Home from './components/Home';
import TodaysWalks from './components/TodaysWalks';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import ViewPack from './components/ViewPack';
import AddNewDog from './components/AddNewDog';
import PageNavLinks from './components/PageNavLinks';
import UserAndLogout from './components/UserAndLogout';
import Test from './components/Test';

function App() {
  const [dogs, setDogs] = useState([])
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(false)

  console.log("Hey")
  useEffect(() => {
      fetch('http://localhost:3000/users')
      .then((resp) => resp.json())
      .then((data) => setUsers(data))

      console.log("Hello")

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
      <Test />
      <Switch>
        <Route path="/viewpack">
          <ViewPack dogs={dogs} />
        </Route>
        <Route path="/addnewdog">
          <AddNewDog addDog={addDog} />
        </Route>
        <Route path="/">
          <TodaysWalks dogs={dogs} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
