import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputForm from './components/InputForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ProdPerfect Dashboard App</h1>
        <InputForm />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Michael Thum
        </p>
        <p>
          Katelyn
        </p>
        <p>JAIME</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Michael Guillemette
        </a>
      </header>
    </div>
  );
}


export default App;
