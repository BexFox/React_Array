import React, { useEffect } from "react";
import "./UserList.css";

function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log("The value of user is set");
    console.log(user);
    return () => {
      console.log("Before value of unchanged");
      console.log(user);
    };
  }, [user]);
  return (
    <div className="userList">
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => {
          onToggle(user.id);
        }}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button
        className="del_Btn"
        onClick={() => {
          onRemove(user.id);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
