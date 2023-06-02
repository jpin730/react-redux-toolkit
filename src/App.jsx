import { Counter } from "./components";

export const App = () => {
  const cardClasses = "bg-white border rounded p-5 my-5";

  return (
    <div className="container">
      <h1 className="my-3">React Redux Toolkit</h1>

      <div className={cardClasses}>
        <Counter />
      </div>
    </div>
  );
};
