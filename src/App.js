import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Logo from './components/Logo'

function App() {
  return (
    <div className="App">
      <Logo/>
      <Header/>   
      <Home/>
    </div>
  );
}

export default App ;
