import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { increment, decrement } from "../redux/slices/counterSlice";
import ShareICon from "../assets/btnShare.svg";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="p-4 gap-7 flex flex-col justify-center items-center">
      <h1 className="text-2xl">Counter: {count}</h1>
      <button
        onClick={() => dispatch(increment())}
        className="m-2 p-2 bg-blue-500 text-white"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="m-2 p-2 bg-red-500 text-white"
      >
        Decrement
      </button>
      <a href="#">
        <img src={ShareICon} alt="share" />
      </a>
    </div>
  );
};

export default Counter;
