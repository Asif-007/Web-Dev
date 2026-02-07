import { createRoot } from 'react-dom/client';
import store from './stores';
import CoinCreate from './CoinCreate';
import {Provider} from 'react-redux'
function App() {
    return (
        <Provider store={store}>
            <h1>Hello</h1>
            <CoinCreate></CoinCreate>
        </Provider>
    )
}



createRoot(document.getElementById('root')).render(<App />);