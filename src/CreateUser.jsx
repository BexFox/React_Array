import React, { useRef } from 'react';
import './CreateUser.css';

export default React.memo(function CreateUser({
  username,
  email,
  onChange,
  onCreate,
}) {
  const firstInput = useRef();
  const secondInput = useRef();
  return (
    <div className='createUser'>
      <input
        name='username'
        placeholder='ID'
        onChange={onChange}
        value={username || ''}
        ref={firstInput}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            secondInput.current.focus();
          }
        }}
        autoFocus
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
            firstInput.value = '';
          }
        }}
      />
      <button onClick={onCreate}>Register</button>
    </div>
  );
});
