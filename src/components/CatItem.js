import React from 'react';
import './CatItem.css';

const CatItem = (props) => {
  const REMOVE_SYNONYMS = [
    'Got it!',
    'Cool',
    'Good to know',
    'Had no idea...',
    'Didn\'t know that...',
    'Will remember that one!',
    'Wow!',
    'Brilliant!',
    'Awesome fact!'
  ]
  let randomWord = REMOVE_SYNONYMS[Math.floor(Math.random() * REMOVE_SYNONYMS.length)];

  return (
    <div className="cat-item">
      <img alt="Cat" className="cat-item__image" src={ props.image } />
      <div className="cat-item__content">
        <p>
          <em>{ props.fact }</em>
        </p>
        <button className="button" onClick={props.onRemoveButtonClick} type="button">{ randomWord }</button>
      </div>
    </div>
  );
}

export default CatItem;
