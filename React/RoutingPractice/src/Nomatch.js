import { Link, useNavigate } from "react-router";

export default function Nomatch() {
    const navigate = useNavigate();
  return (
    <>
      <h1>Error - 404</h1>
      <h2>Page Not Found</h2>
      <button onClick={()=>navigate('/home')}>Back to Home</button>
    </>
  );
}
