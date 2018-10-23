import React, { Component } from 'react';
import './App.css';

class App extends Component {
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

  handleChange = event => {};

  handleSubmit = event => {
    event.preventDefault();
  };
}

export default App;
