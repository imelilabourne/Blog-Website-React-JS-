import React from 'react';
import './App.css';
import Home from './containers/Home';
import ContactUs from './containers/ContactUS';

import Header from './components/Header'; 
import Logo from './components/Logo';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './containers/About';
import BlogPost from './components/Blog Post';
import Sidebar from './components/sidebar';

function App() {
  return (
    <Router>
    <div className="App">
      <Logo/>
      <Header/>   
      <Route path="/" exact component={Home} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/about" component={About}/>
      <section className="container">
        <BlogPost/>
        <Sidebar/>
      </section>
    </div>
    </Router>
  );
}

export default App ;
