import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement, Reset } from "./Slicer1";

// here state is an object which has slices has its attributes which in itself are again an object

export default function Counting() {
  const count = useSelector((state) => state.slice1.count);
    const dispatch = useDispatch();
    
    // console.log(Reset())
  return (
    <>
      <h1>Count is : {count}</h1>
      <button
        onClick={() => {
          dispatch(Increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(Decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(Reset());
        }}
      >
        Reset
      </button>
    </>
  );
}
