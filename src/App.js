import React, { Component } from 'react';
import NavBar from './components/NavBar'
import PersonList from './components/PersonList'
//import logo from './logo.svg';
import './App.css';
import ObjectList from './components/ObjectList';
import LabelBottomNavigation from './components/LabelBottomNavigation';
import SearchAppBar from './components/SearchAppBar';
import IconButtons from './components/IconButtons';
import SingleLineGridList from './components/SingleLineGridList';
class App extends Component {
  render() {
    return (
      <div>
        
        <NavBar />
        
        <IconButtons />
        <ObjectList />
        
        <LabelBottomNavigation />
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
