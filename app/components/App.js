import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Get Match Results of Your Favorite Football Team</h1>
        <form>
          <input type="text" className="input" placeholder="Please enter FIFA code of the country..." />
          <input type="submit" className="submit-btn" value="Submit" />
        </form>
      </div>
    );
  }
}