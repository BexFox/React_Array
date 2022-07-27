import React, { useReducer, useRef, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import './App.css';

function countActiveUsers(users) {
  console.log('Count activate users...');
  return users.filter((user) => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: '',
  },
  users: [
    { id: 1, username: 'avion', email: 'avion@example.com', active: true },
    { id: 2, username: 'bonita', email: 'bonita@example.com', active: false },
    { id: 3, username: 'cielo', email: 'cielo@example.com', active: false },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
  }
  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value,
    });
  }, []);

  return (
    <div className='App'>
      <CreateUser username={username} email={email} onChange={onChange} />
      <UserList users={users} />
      <div>Number of active users : 0</div>
    </div>
  );
}

export default App;
