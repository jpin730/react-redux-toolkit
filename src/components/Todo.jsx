import { useState } from "react";

import { useGetTodoQuery } from "../store";

export const Todo = () => {
  const [todoId, setTodoId] = useState(1);
  const { isFetching: isLoading, data: todo } = useGetTodoQuery(todoId);

  const onClickNext = () => {
    setTodoId(todoId + 1);
  };

  const loadingMessage = (
    <>
      <h5 className="text-center">Loading...</h5>
      <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated w-100"></div>
      </div>
    </>
  );

  const notFoundAlert = (
    <div className="alert alert-danger text-center">Todo not found</div>
  );

  const todoMessage = (
    <div className="alert alert-info text-center">
      <b>{todo?.completed ? "COMPLETED" : "PENDING"}:</b> {todo?.title}
    </div>
  );

  return (
    <>
      <h2>Todo</h2>
      <hr />

      <div className="d-flex mb-3">
        <button
          className="btn btn-primary px-5 mx-auto"
          onClick={onClickNext}
          disabled={isLoading}
        >
          Next
        </button>
      </div>

      {isLoading && loadingMessage}

      {!isLoading && (todo ? todoMessage : notFoundAlert)}
    </>
  );
};
