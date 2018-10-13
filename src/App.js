import React, { Component } from 'react';
import Crawler from './Components/Crawler'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            WebCrawler
          </p>
        </header>
        <div className="App-body">
          <Crawler />          
        </div >
      </div >
    );
  }
}

export default App;
