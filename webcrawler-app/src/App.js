import React, { Component } from 'react';
import './App.css';
import * as api from './Api';

class App extends Component {
  state = {
    input: ''
  };

  render() {
    return (
      <div className="App">
        <h1>Web Crawler</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            aria-label="article text area"
            type="text"
            name="name"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  handleSubmit = event => {
    // console.log('hello');
    event.preventDefault();
    api.sendURL();
  };
}

export default App;
