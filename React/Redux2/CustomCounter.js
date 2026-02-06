import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement, Reset, CustomIncrement } from "./Slicer1";
export default function CustomCounter() {
  const [value, setValue] = useState();
  // const count = useSelector((state) => {
  //   state.slice1.count;
  // });
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(CustomIncrement(Number(value)));
  }

  return (
    <>
      <input
        value={value}
        onChange={(e) => {
          e.preventDefault();
          setValue(e.target.value);
        }}
        type="number"
        placeholder="Enter value"
      ></input>
      <button type="button" onClick={handleClick}>
        Submit
      </button>
    </>
  );
}
