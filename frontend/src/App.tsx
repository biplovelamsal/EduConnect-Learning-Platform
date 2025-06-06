import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-100 border-b border-gray-200">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md">Home</Link>
          </li>
          <li>
            <Link to="/login" className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md">Login</Link>
          </li>
        </ul>
      </nav>

      <div className="p-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;