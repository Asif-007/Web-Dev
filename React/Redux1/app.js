import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import Counting from "./Counting";
import stores from "./Stores";
import { StrictMode } from "react";
function App() {
  return (
    <Provider store={stores}>
      <Counting></Counting>
    </Provider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
