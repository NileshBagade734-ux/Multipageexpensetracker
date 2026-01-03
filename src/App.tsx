import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';
import Analytics from './components/Analytics';
import Budget from './components/Budget';
import Categories from './components/Categories';
import Recurring from './components/Recurring';
import Notifications from './components/Notifications';
import Settings from './components/Settings';
import ExportPage from './components/ExportPage';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const authStatus = localStorage.getItem('expenso_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('expenso_auth', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.setItem('expenso_auth', 'false');
    setIsAuthenticated(false);
  };

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage onSignup={handleLogin} />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/transactions"
            element={isAuthenticated ? <Transactions /> : <Navigate to="/login" />}
          />
          <Route
            path="/analytics"
            element={isAuthenticated ? <Analytics /> : <Navigate to="/login" />}
          />
          <Route
            path="/budget"
            element={isAuthenticated ? <Budget /> : <Navigate to="/login" />}
          />
          <Route
            path="/categories"
            element={isAuthenticated ? <Categories /> : <Navigate to="/login" />}
          />
          <Route
            path="/recurring"
            element={isAuthenticated ? <Recurring /> : <Navigate to="/login" />}
          />
          <Route
            path="/notifications"
            element={isAuthenticated ? <Notifications /> : <Navigate to="/login" />}
          />
          <Route
            path="/settings"
            element={isAuthenticated ? <Settings onLogout={handleLogout} /> : <Navigate to="/login" />}
          />
          <Route
            path="/export"
            element={isAuthenticated ? <ExportPage /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
