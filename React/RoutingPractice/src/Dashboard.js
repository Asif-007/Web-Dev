import { Outlet, Routes,Route, useParams, Link } from "react-router";
import Access from "./Access";
import User from "./User";
export default function Dashboard() {
  //   const { name, access } = useParams();
  //     const isGuest = name && access;
  return (
    <>
          <h2>This is Dashboard</h2>
          <nav style={{ display: 'flex', gap: '20px'}}>
              <Link to='Access'>Access</Link>
              <Link to='User'>User</Link>
          </nav>
      {/* {isGuest ? (
        <h3>
          Welcome back {name}! Your current clearance is : {access}
        </h3>
      ):<h3>Please Login</h3>} */}
          {/* <Outlet/> */}
          <Routes>
              <Route path="Access" element={<Access/>}></Route>
              <Route path="User" element={<User/>}></Route>
          </Routes>
    </>
  );
}
