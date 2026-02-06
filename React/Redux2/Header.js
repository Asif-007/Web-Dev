import { useSelector } from "react-redux";

function Header() {
  const count = useSelector((state) => state.slice2.count);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h1>Swiggy</h1>
      <h2>Cart: {count}</h2>
    </div>
  );
}

export default Header;
