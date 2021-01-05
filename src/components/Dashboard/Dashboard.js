import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './Dashboard.css';

export default class Dashboard extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleClick = () => {
    // history.push('/learn');
    const { history } = this.props;
    history.push('/learn');
  };

  render() {
    const words = this.props.passedWords;
    let correctCount = 0;
    let incorrectCount = 0;

    words.forEach((word) => {
      correctCount = correctCount + word.correct_count;
      incorrectCount = incorrectCount + word.incorrect_count;
    });

    const listOfWords = words.map((word) => {
      console.log(word);
      return (
        <li key={word.id}>
          <p>
            Original: {word.original} | Translation: {word.translation}
          </p>
          <p>
            Correct: {word.correct_count} | Incorrect: {word.incorrect_count}
          </p>
        </li>
      );
    });
    console.log(correctCount);
    return (
      <div>
        <Link className='learn-btn' to='/learn'>
          Start Practicing
        </Link>
        <h3 className='statement'>Words to practice</h3>
        <ul className='list'>{listOfWords}</ul>
      </div>
    );
  }
}
