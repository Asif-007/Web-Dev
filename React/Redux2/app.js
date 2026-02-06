import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import Counting from "./Counting";
import stores from "./Stores";
import { StrictMode } from "react";
import CustomCounter from "./CustomCounter";
function App() {
  return (
    <Provider store={stores}>
      <Counting></Counting>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <CustomCounter></CustomCounter>
    </Provider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
