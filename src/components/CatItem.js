import React from 'react';
import './CatItem.css';

const CatItem = (props) => {
  return (
    <div className="cat-item">
      <img alt="Cat" className="cat-item__image" src={ props.image } />
      <p className="cat-item__fact">
        { props.fact }
      </p>
    </div>
  );
}

export default CatItem;
