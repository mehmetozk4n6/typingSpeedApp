import React from 'react';
import './App.css';
import TextGenerator from './components/textGenerator';

function App() {
  type el = true | false;
  var el = false;

  return (
    <div className="App">
      <TextGenerator/>
      <p>{el}</p>
    </div>
  );
}

export default App;
