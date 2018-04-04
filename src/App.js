import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    userName: 'jimbo64'
  }

  eventHandler = (e) => {
    const userName = e.target.value
    this.setState({userName})
  }

  render() {
    return (
      <div className="App">
        <h1>User Input</h1>
        <UserInput eventHandler={this.eventHandler} user={this.state.userName}/>
        <h1>User Output</h1>
        <UserOutput user={this.state.userName} />
        <UserOutput user={this.state.userName} />
      </div>
    );
  }
}

export default App;
