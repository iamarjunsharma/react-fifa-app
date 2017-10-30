import React, { Component } from 'react';
import Loading from './Loading';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Get Match Results of Your Favorite Football Team</h1>
        <form>
          <input type="text" className="input" placeholder="Please enter FIFA code of the country..." />
          <input type="submit" className="submit-btn" value="Submit" />
        </form>
        {this.state.loading
          ? <Loading />
          : <div className="search-results">Results</div>}
      </div>
    );
  }
}