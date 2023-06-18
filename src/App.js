import logo from './logo2.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TermsAndConditionsOfUse from './pages/TermsAndConditionsOfUse';
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {

    return (
        <Router>
            <div className="App">
                <Link to="/">
                    <img src={logo} className="App-logo" alt="logo"/>
                </Link>

                {/*<Home />*/}
                <Routes>
                    <Route path="/*" element={<Home />} />
                        <Route path="/TermsAndConditionsOfUse" element={<TermsAndConditionsOfUse />} />
                        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                    </Routes>

                <nav className="Terms">
                    <ul>
                        <li>
                            <a className="Mini-text" href="/TermsAndConditionsOfUse">Terms and Conditions of Use</a>
                        </li>
                        <li>
                            <a className="Mini-text" href="/PrivacyPolicy">Privacy Policy</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </Router>
    );
}

export default App;
