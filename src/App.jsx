import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import FirstOnboardingPage from './Pages/Onboarding/FirstOnboardingPage';
import SecondOnboardingPage from './Pages/Onboarding/SecondOnboardingPage';
import DefaultStarterPage from './Pages/Onboarding/DefaultStarterPage';
import LastOnboardingPage from './Pages/Onboarding/LastOnboardingPage'; 
import LoginPage from './Pages/Auth/LoginPage';
import PasswordAuthPage from './Pages/Auth/PasswordAuthPage';
import HomePage from './Pages/Dashboard/HomePage';
import SignUp from './Pages/SignUp/SignUp';
import PasswordSignUp from './Pages/SignUp/PasswordSignUp';


function App() {
    return (
        <>
            <Router>
                <Routes>
                <Route path="/" element={<DefaultStarterPage />} />
                <Route path="/first" element={<FirstOnboardingPage />} />
                <Route path="/second" element={<SecondOnboardingPage />} />
                <Route path='/third' element={<LastOnboardingPage />} />
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/passwordCreate' element={<PasswordSignUp />} />
                <Route path='/LogIn' element={<LoginPage />} />
                <Route path='/Password' element={<PasswordAuthPage />} />
                <Route path='/home' element={ <HomePage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
