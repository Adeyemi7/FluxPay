import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import FirstOnboardingPage from './Pages/Onboarding/FirstOnboardingPage';
import SecondOnboardingPage from './Pages/Onboarding/SecondOnboardingPage';
import DefaultStarterPage from './Pages/Onboarding/DefaultStarterPage';
import LastOnboardingPage from './Pages/Onboarding/LastOnboardingPage'; 


function App() {
    return (
        <>
            <Router>
                <Routes>
                <Route path="/" element={<DefaultStarterPage />} />
                <Route path="/first" element={<FirstOnboardingPage />} />
                <Route path="/second" element={<SecondOnboardingPage />} />
                <Route path='/third' element={<LastOnboardingPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
