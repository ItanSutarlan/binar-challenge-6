import React, { useState, useEffect } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import SearchUserForm from './forms/SearchUserForm';

const App = () => {
  const usersData = [
    {
      id: 1,
      email: 'pussy.slay3r@gmail.com',
      username: 'PussySlayer613',
      experience: 600000,
      lvl: 600,
    },
    {
      id: 2,
      email: 'hclw@gmail.com',
      username: 'HardcoreLevellingWarrior',
      experience: 600000,
      lvl: 666,
    },
  ];

  const [users, setUsers] = useState(usersData);
  const [searchedUser, setSearchedUser] = useState([]);
  const [editing, setEditing] = useState(false);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if (searchedUser.length > 0) {
      let data = [];
      searchedUser.forEach((filteredUser) => {
        const newData = users.filter((user) => user.id === filteredUser.id);
        data = [...data, ...newData];
      });
      setSearchedUser(data);
    }
  }, [users]);

  const initialFormState = {
    id: null,
    email: '',
    username: '',
    experience: '',
    lvl: '',
  };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      email: user.email,
      username: user.username,
      experience: user.experience,
      lvl: user.lvl,
    });
  };

  const searchUser = (category, value) => {
    setSearchedUser(users.filter((user) => user[category] == value));
  };

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h1>CRUD App</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : searching ? (
            <div>
              <h2>Search user</h2>
              <SearchUserForm
                setSearching={setSearching}
                searchUser={searchUser}
                setSearchedUser={setSearchedUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} setSearching={setSearching} />
            </div>
          )}{' '}
        </div>
        {searching ? (
          <div className="flex-large">
            <h2>Result</h2>
            <UserTable
              users={searchedUser}
              editRow={editRow}
              deleteUser={deleteUser}
            />
          </div>
        ) : (
          <div className="flex-large">
            <h2>View users</h2>
            <UserTable
              users={users}
              editRow={editRow}
              deleteUser={deleteUser}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
