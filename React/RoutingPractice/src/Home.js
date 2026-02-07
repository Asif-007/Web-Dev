import { useNavigate } from "react-router";

export default function Home() {
    const navigate = useNavigate();
    function navi() {
        navigate('/dashboard/Guest/Viewer');
    }
  return (
    <>
      <h2>This is Home</h2>
      <button
        onClick={navi}
      >
        Login as Guest
      </button>
    </>
  );
}
