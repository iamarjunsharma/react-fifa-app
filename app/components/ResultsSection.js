import React from 'react';
import PropTypes from 'prop-types';

const ResultsSection = props => {
  return (
    <ul className="results">
      {props.results.map(result => (
        <li key={result.match_number}>
          {result.home_team.code} <span className="score">{result.home_team.goals}  -  {result.away_team.goals}</span> {result.away_team.code}
        </li>
      ))}
    </ul>
  );
}

ResultsSection.propTypes = {
  results: PropTypes.array.isRequired
}

export default ResultsSection;