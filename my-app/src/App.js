import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputForm from './components/InputForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><span>ProdPerfect</span> Dashboard App</h1>
        <InputForm />
      </header>
    </div>
  );
}


export default App;
