import React from 'react';

function User({ user }) {
  return (
    <div>
      <p>{user.username}</p> <span>({user.email})</span>
    </div>
  );
}

export default function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}