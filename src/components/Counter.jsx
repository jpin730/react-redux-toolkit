import { useDispatch, useSelector } from "react-redux";

import { decrement, increment, incrementBy } from "../store";

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const step = 2;

  const onIncrement = () => dispatch(increment());
  const onDecrement = () => dispatch(decrement());
  const onIncrementBy = () => dispatch(incrementBy(step));
  return (
    <>
      <h2>Counter</h2>
      <hr />

      <div className="alert alert-info text-center">count is {count}</div>

      <div className="d-flex justify-content-center gap-3">
        <button
          className="btn btn-primary font-monospace px-4 px-sm-5"
          onClick={onIncrement}
        >
          +1
        </button>
        <button
          className="btn btn-primary font-monospace px-4 px-sm-5"
          onClick={onDecrement}
        >
          -1
        </button>
        <button
          className="btn btn-primary font-monospace px-4 px-sm-5"
          onClick={onIncrementBy}
        >
          {(step > 0 && "+") + step}
        </button>
      </div>
    </>
  );
};
