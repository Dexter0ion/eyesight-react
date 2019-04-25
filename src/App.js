import React, { Component } from 'react';
import NavBar from './components/NavBar'
//import PersonList from './components/PersonList'
//import logo from './logo.svg';
import './App.css';
//import ObjectList from './components/ObjectList';
//import LabelBottomNavigation from './components/LabelBottomNavigation';
//import CenteredTabs from './components/CenteredTabs';
import NavTabs from './components/NavTabs';




class App extends Component {
  render() {
    return (
      <div>
        
        <NavBar />
        <NavTabs />

       
      </div>
     
      /*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            Hello,World!
          </p>
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
      */
    );
  }
}

export default App;
