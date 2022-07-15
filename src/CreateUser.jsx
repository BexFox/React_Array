import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input
        name='username'
        placholder='ID'
        onChange={onChange}
        value={username}
      />
      <input
        name='email'
        placholder='Email'
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>Register</button>
    </div>
  );
}

export default CreateUser;
