import React from 'react';

export default function Correct(props) {
  return (
    <div>
      <h2>Correct!</h2>
      <button onClick={props.nextWord} className='nextWord-btn' to='/'>
        Next Word!
      </button>
    </div>
  );
}
