import React, { Component } from 'react';
import './App.scss';
import NavBar from './containers/NavBar';
import Main from './containers/Main';



class App extends Component {

 

  render() {
    return (
      <div className="App">
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default App;
