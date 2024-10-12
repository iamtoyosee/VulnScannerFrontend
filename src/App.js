import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inspector from './components/Inspector';
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';
import ForgotPassword from './Authentication/ForgotPassword'; // Placeholder for future
import Dashboard from './pages/Dashboard';
import StatsDashboard from './pages/StatsDashboard';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Conditional routing based on authentication */}
          {authenticated ? (
            <>
              <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/" element={<Login setAuthenticated={setAuthenticated} />} />
            </>
          ) : (
            <Route path="/" element={<Dashboard />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
