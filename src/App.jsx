import { Counter, Pokemon, Todo } from "./components";

export const App = () => {
  const cardClasses = "bg-white border rounded p-5 my-4";

  return (
    <div className="container">
      <h1 className="my-3">React Redux Toolkit</h1>

      <div className={cardClasses}>
        <Counter />
      </div>

      <div className={cardClasses}>
        <Pokemon />
      </div>

      <div className={cardClasses}>
        <Todo />
      </div>
    </div>
  );
};
