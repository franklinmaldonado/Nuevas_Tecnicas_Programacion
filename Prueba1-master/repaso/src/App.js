import logo from './logo.svg';
import './App.css';
import ingreso from './componentes/ingreso';
import React from 'react';


class App extends React.Component{
  imprimirNombre =()=>{
    console.log("Franklin Maldonado")
  }
  


render () {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ingreso />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}
export default App;
