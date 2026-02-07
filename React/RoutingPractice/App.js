import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link } from 'react-router';
import Dashboard from './src/Dashboard';
import Settings from './src/Settings';
import Home from './src/Home';
import Nomatch from './src/Nomatch';
import User from './src/User';
import Access from './src/Access';
function App() {
    return (
        <>
            <BrowserRouter>
                <nav style={{display:'flex' ,gap: '20px'}}>
                    <Link to='/Home'>Home</Link>
                    <Link to='/Dashboard'>Dashboard</Link>
                    <Link to='/Settings'>Settings</Link>

                </nav>
                <Routes>
                    <Route path='/'></Route>
                    <Route path='/Home' element={<Home/>}></Route>
                    <Route path='/Dashboard/*' element={<Dashboard />}>
                    </Route>
                    {/* <Route path='/Dashboard/:name/:access' element={<Dashboard/>}></Route> */}
                    <Route path='/Settings' element={<Settings />}></Route>
                    <Route path='*' element={<Nomatch />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

createRoot(document.getElementById('root')).render(<App />);