import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import TrainersList from './Components/TrainersList';
import TrainerDetail from './Components/TrainerDetails';

function App() {
  return (
      <Router>
        <div style={{ padding: '20px' }}>
          {/* Navigation Menu */}
          <nav style={{ marginBottom: '20px', borderBottom: '2px solid black', paddingBottom: '10px' }}>
            <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
            <Link to="/trainers">Trainers List</Link>
          </nav>

          {/* Route Definitions */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trainers" element={<TrainersList />} />
            {/* The :id indicates a dynamic URL parameter */}
            <Route path="/trainers/:id" element={<TrainerDetail />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;