import React from 'react';
import { Link } from 'react-router-dom';
export default function Incorrect(props) {
  return (
    <div>
      <h2>Incorrect.</h2>
      <button onClick={props.nextWord} className='nextWord-btn'>
        Next Word!
      </button>
    </div>
  );
}
