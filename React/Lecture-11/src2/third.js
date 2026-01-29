import { useContext } from "react";
import GlobalContext from "./Global";


function Third() {
    const data = useContext(GlobalContext);
  return (
    <>
          <h2>I am displaying { data.count}</h2>
    </>
  );
}

export default Third;
