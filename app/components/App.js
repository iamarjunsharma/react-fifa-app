import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resultsFetchData } from '../actions';
import Loading from './Loading';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { code: '' }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ code: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let code = this.state.code;
    this.props.fetchData(`http://worldcup.sfg.io/matches/country?fifa_code=${code}`);
  }

  render() {
    return (
      <div className="container">
        <h1>Get Match Results of Your Favorite Football Team</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Please enter FIFA code of the country..."
            onChange={this.handleChange}
          />
          <input
            type="submit"
            className="submit-btn"
            value="Submit" />
        </form>
        {this.props.isLoading
          ? <Loading />
          : <div className="search-results">Results</div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        results: state.results,
        hasErrored: state.resultsHasErrored,
        isLoading: state.resultsIsLoading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(resultsFetchData(url))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);