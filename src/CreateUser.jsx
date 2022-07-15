import React from 'react';

export default function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input
        name='username'
        placeholder='ID'
        onChange={onChange}
        value={username}
      />
      <input
        name='email'
        placeholder='Email'
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>Register</button>
    </div>
  );
}
