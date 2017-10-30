import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text
    }
  }

  componentDidMount() {
    var stopper = `${this.props.text}...`;

    this.interval = window.setInterval(() => {
      if (this.state.text === stopper) {
        this.setState(() => {
          return { text: this.props.text }
        });
      } else {
        this.setState((prevState) => {
          return { text: `${prevState.text}.` }
        });
      }
    }, 300);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <p className="loading">
        {this.state.text}
      </p>
    );
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired
}

Loading.defaultProps = {
  text: 'Loading'
}