import React from 'react';
import './App.css';
import ListofPlayers from './Components/ListofPlayers';
import IndianPlayers from './Components/IndianPlayers';

function App() {
  // Toggle this flag variable between true and false to change the rendering output
  const flag = true;

  return (
      <div className="App" style={{ padding: '30px', textAlign: 'left' }}>
        <h2>Cricket Application Dashboard</h2>
        <p>Current Flag Status: <strong>{flag.toString()}</strong></p>
        <hr />

        {/* Simple conditional rendering based on the flag variable */}
        {flag ? <ListofPlayers /> : <IndianPlayers />}
      </div>
  );
}

export default App;