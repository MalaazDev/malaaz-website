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
                <div className="header-container">
                    <Link to="/">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </Link>
                    <nav>
                        <ul>
                            <li>
                                <a className="mini-text" href="/TermsAndConditionsOfUse">Conditions D'utilisation</a>
                            </li>
                            <li>
                                <a className="mini-text" href="/PrivacyPolicy">Confidentialité</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route path="/TermsAndConditionsOfUse" element={<TermsAndConditionsOfUse />} />
                    <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                </Routes>

            </div>
        </Router>
    );
}

export default App;
