import React, { useState, useRef } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import './App.css';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const users = [
    { id: 1, username: 'avion', email: 'avion@example.com' },
    { id: 2, username: 'bonita', email: 'bonita@example.com' },
    { id: 3, username: 'cielo', email: 'cielo@example.com' },
  ];
  const nextId = useRef(4);
  const onCreate = () => {
    nextId.current += 1;
  };

  return (
    <div className='App'>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </div>
  );
}

export default App;
