import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resultsFetchData } from '../actions';
import ResultsSection from './ResultsSection';
import Loading from './Loading';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handle form submission
  handleSubmit(e) {
    e.preventDefault();
    const code = this.inputCode.value; // FIFA code entered

    // make async API call
    this.props.fetchData(`http://worldcup.sfg.io/matches/country?fifa_code=${code}`);

    this.inputCode.value = ''; // reset input to blank
  }

  render() {
    const { results, isLoading } = this.props;
    return (
      <div className="container">
        <h1>Get Match Results of Your Favorite Football Team</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Please enter FIFA code of the country..."
            ref={(input) => { this.inputCode = input }}
          />
          <input
            type="submit"
            className="submit-btn"
            value="Submit" />
        </form>
        {isLoading && <Loading />}
        {results.length
          ? <ResultsSection results={results} />
          : null
        }
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