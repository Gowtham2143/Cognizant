import React from 'react';
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
      <div className="App">
        {/* Invoking the functional component and passing props */}
        <CalculateScore
            Name="M.Harsha Vardhan"
            School="Global High School"
            Total={450}
            Goal={5}
        />
      </div>
  );
}

export default App;