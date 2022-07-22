import React, { useState } from 'react';

function Counter() {
  const [number, SetNumber] = useState(0);
  const onIncrease = () => {
    setNumber();
  };
  const onDecrease = () => {
    setNumber();
  };

  return (
    <div>
      <h1>number</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
