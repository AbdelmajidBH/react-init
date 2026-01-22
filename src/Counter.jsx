import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>The count is: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        Increment
      </button>
      <span> </span>
      <button onClick={() => setCount((count) => count - 1)} disabled={count === 0}>
        Decrement
      </button>
    </>
  );
}

export default Counter;
