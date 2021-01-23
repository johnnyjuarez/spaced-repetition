import React from 'react';
export default function Incorrect(props) {
  return (
    <div>
      <h2>Incorrect. The correct answer is <strong>{props.correctWord}.</strong></h2>
      <button onClick={props.nextWord} className='nextWord-btn'>
        Next Word!
      </button>
    </div>
  );
}
