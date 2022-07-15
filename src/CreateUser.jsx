import React, { useRef } from 'react';

export default function CreateUser({ username, email, onChange, onCreate }) {
  const firstInput = useRef();
  const secondInput = useRef();

  return (
    <div>
      <input
        autoFocus
        name='username'
        placeholder='ID'
        onChange={onChange}
        value={username}
        ref={firstInput}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            secondInput.current.focus();
          }
        }}
      />
      <input
        name='email'
        placeholder='Email'
        onChange={onChange}
        value={email}
        ref={secondInput}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onCreate();
            firstInput.current.focus();
          }
        }}
      />
      <button onClick={onCreate}>Register</button>
    </div>
  );
}
