import React, { useState} from 'react';
import AddUser from './Components/Users/AddUser.User';
import UsersList from './Components/Users/UsersList.User';

const App = () => {

  const [usersList, setUsersList] = useState([]);

  const addUser = (uName, uAge) => {
    setUsersList((prevUser) => {
      return [...prevUser, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  }

  return (
    <React.Fragment>
      <AddUser onAddUser={addUser} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
