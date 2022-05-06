import React, { useState, useEffect } from 'react';

const SearchUserForm = (props) => {
  const [category, setCategory] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setCategory(value);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const { name, value } = event.target[0];
        console.info(name + value);
        props.searchUser(name, value);
      }}
    >
      <label>Search</label>
      <input
        type="text"
        className="searchTerm"
        name={category}
        placeholder="search"
      />
      <label>
        <input
          type="radio"
          name="category"
          value="username"
          checked={category === 'username'}
          onChange={handleInputChange}
        />{' '}
        Username
      </label>
      <label>
        <input
          type="radio"
          name="category"
          value="email"
          checked={category === 'email'}
          onChange={handleInputChange}
        />{' '}
        email
      </label>
      <label>
        <input
          type="radio"
          name="category"
          value="experience"
          checked={category === 'experience'}
          onChange={handleInputChange}
        />{' '}
        experience
      </label>
      <label>
        <input
          type="radio"
          name="category"
          value="lvl"
          checked={category === 'lvl'}
          onChange={handleInputChange}
        />{' '}
        level
      </label>
      <button>Search user</button>
      <button
        onClick={() => {
          props.setSearching(false);
          props.setSearchedUser([]);
        }}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default SearchUserForm;
