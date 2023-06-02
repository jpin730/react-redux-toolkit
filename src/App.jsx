import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container my-5">
      <h1>React Redux Toolkit</h1>

      <div className="my-4">
        <button
          className="btn btn-primary btn-lg"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
};
