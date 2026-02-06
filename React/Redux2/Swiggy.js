import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import Header from "./Header";
import Card from "./Card";
import stores from "./store2";
function App() {
  return (
    <Provider store={stores}>
      <Header></Header>
      <Card></Card>
    </Provider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
