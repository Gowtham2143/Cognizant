import React from 'react';
import './App.css';
import EventExamples from './Components/EventExamples';
import CurrencyConvertor from './Components/CurrencyConvertor';

function App() {
  return (
      <div className="App" style={{ padding: '30px', maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
        <h2>React Interactive Event Dashboard</h2>
        <hr style={{ marginBottom: '20px' }} />
        <EventExamples />
        <CurrencyConvertor />
      </div>
  );
}

export default App;