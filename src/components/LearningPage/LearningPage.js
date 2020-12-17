import React from 'react';

export default function LearningPage(props) {
  console.log(props.wordData);
  return (
    <div>
      <h2>Learning Page</h2>
      <h3>
        Translate the word: <span>{props.wordData.nextWord}</span>
      </h3>
      <p>What's the translation for this word?</p>
      <form>
        <label htmlFor='learn-guess-input'>Answer: </label>
        <input id='learn-guess-input' type='text' placeholder='text' />
        <button type='submit'>Submit</button>
      </form>
      <p>
        You have answered this word correctly{' '}
        <span>{props.wordData.wordCorrectCount}</span> time.
      </p>
      <p>
        You have answered this word incorrectly{' '}
        <span>{props.wordData.wordIncorrectCount}</span> time.
      </p>
      <p>
        Your total score is: <span>{props.wordData.totalScore}</span>
      </p>
    </div>
  );
}
