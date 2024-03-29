import logo from './logo2.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TermsAndConditionsOfUse from './pages/TermsAndConditionsOfUse';
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import WellKnownRedirect from "./pages/WellKnownRedirect";


function App() {

    return (
        <Router>
            <div className="App">

                <div className="header-container">
                    <Link to="/">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </Link>
                </div>

                <Routes >
                    <Route path="/*" element={<Home />} />
                    <Route path="/TermsAndConditionsOfUse" element={<TermsAndConditionsOfUse />} />
                    <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                    <Route path="/.well-known/apple-app-site-association" element={<WellKnownRedirect />} />
                </Routes>

                <div className='footer-container'>
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
            </div>
        </Router>
    );
}

export default App;
