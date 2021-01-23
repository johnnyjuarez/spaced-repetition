import React, { Component } from 'react';
import Config from '../../config';
import TokenService from '../../services/token-service';
import Correct from '../../components/Correct/Correct';
import Incorrect from '../../components/Incorrect/Incorrect';

import './LearningPage.css';

class LearningPage extends Component {
  state = {
    userInput: '',
    data: {},
    correct: null,
  };
  // console.log(props.history);

  inputHandler = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  nextWordHandler = (e) => {
    this.setState({
      userInput: '',
      data: {},
      correct: null,
    });
  };

  guessHandler = (e) => {
    let payload = {
      guess: this.state.userInput,
    };
    e.preventDefault();
    return fetch(`${Config.API_ENDPOINT}/language/guess`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          data: data,
        });
      })
      .then(() => {
        console.log(this.state.data.isCorrect);
        if (this.state.data.isCorrect) {
          this.setState({
            correct: this.state.data.isCorrect,
          });
          // renderHTML = <Correct />;
        } else {
          this.setState({
            correct: this.state.data.isCorrect,
          });
        }
      });
  };

  render() {
    let renderHTML = (
      <div className='learn-container'>
        <h2 className='learn-title'>Learning Page</h2>
        <h3>
          Translate the word: <span>{this.props.wordData.nextWord}</span>
        </h3>
        <p>What's the translation for this word?</p>
        <form onSubmit={(e) => this.guessHandler(e)}>
          <label htmlFor='learn-guess-input'>Answer: </label>
          <input
            onChange={this.inputHandler}
            id='learn-guess-input'
            type='text'
            placeholder='text'
          />
          <button type='submit'>Submit</button>
        </form>
        <p>
          You have answered this word correctly{' '}
          <span>{this.props.wordData.wordCorrectCount}</span> time.
        </p>
        <p>
          You have answered this word incorrectly{' '}
          <span>{this.props.wordData.wordIncorrectCount}</span> time.
        </p>
        <p>
          Your total score is: <span>{this.props.wordData.totalScore}</span>
        </p>
      </div>
    );

    return (
      <div>
        {this.state.correct === true ? (
          <Correct nextWord={this.nextWordHandler} correctWord={this.state.data.answer} />
        ) : this.state.correct === false ? (
          <Incorrect nextWord={this.nextWordHandler} correctWord={this.state.data.answer} />
        ) : (
              renderHTML
            )}
      </div>
    );
  }
}

export default LearningPage;
