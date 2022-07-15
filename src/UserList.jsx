import React from 'react';
import './UserList.css';
function User({ user, onRemove }) {
  return (
    <div className='UserListDiv'>
      <b>{user.username}</b> <span>({user.email})</span>
      <button
        className='del_btn'
        onClick={() => {
          onRemove(user.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default function UserList({ users, onRemove }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
}
