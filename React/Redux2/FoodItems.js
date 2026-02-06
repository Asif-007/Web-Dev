import { useState } from "react";

import { addItems, removeItems } from "./slice2";
import { useDispatch } from "react-redux";

export default function FoodItems({value} ) {
  const [inCart, setIncart] = useState(false);
  const dispatch = useDispatch();
  function handleClick() {
    if (inCart === true) {
      dispatch(removeItems())
      setIncart(false);
    }
    else {
      dispatch(addItems())
      setIncart(true);
    }
  }
    return (
      <div>
        <h1>{value.food}</h1>
        <h2>{value.price}</h2>
        <button onClick={handleClick}>{inCart ? "Remove" : "Add"}</button>
      </div>
    );
}
