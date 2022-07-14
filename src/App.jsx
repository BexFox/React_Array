import React from 'react';
import UserList from './UserList';
import './App.css';

function App() {
  const users = [
    { id: 1, username: 'avion', email: 'avion@example.com' },
    { id: 2, username: 'bonita', email: 'bonita@example.com' },
    { id: 3, username: 'cielo', email: 'cielo@example.com' },
  ];
  return (
    <div className='App'>
      <UserList users={users} />
    </div>
  );
}

export default App;
