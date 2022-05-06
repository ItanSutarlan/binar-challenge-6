import React, { useState } from 'react';

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: '', username: '' };

  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.email || !user.username) return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <label>Experience</label>
      <input
        type="text"
        name="experience"
        value={user.experience}
        onChange={handleInputChange}
      />
      <label>Level</label>
      <input
        type="text"
        name="lvl"
        value={user.lvl}
        onChange={handleInputChange}
      />
      <button>Add new user</button>
      <button
        onClick={() => props.setSearching(true)}
        className="button muted-button"
      >
        Search
      </button>
    </form>
  );
};

export default AddUserForm;
