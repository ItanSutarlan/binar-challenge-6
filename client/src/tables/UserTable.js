import React from 'react';

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Email</th>
        <th>Username</th>
        <th>Experience</th>
        <th>Level</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.email}</td>
            <td>{user.username}</td>
            <td>{user.experience}</td>
            <td>{user.lvl}</td>
            <td>
              <button
                className="button muted-button"
                onClick={() => {
                  props.editRow(user);
                }}
              >
                Edit
              </button>
              <button
                className="button muted-button"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
