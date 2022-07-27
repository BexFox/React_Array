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
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

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

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    nextId.current += 1;
  }, [username, email]);

  return (
    <div className='App'>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
      <div>Number of active users : 0</div>
    </div>
  );
}

export default App;
