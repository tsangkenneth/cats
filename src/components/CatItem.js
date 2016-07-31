import React from 'react';

const CatItem = (props) => {
  return (
    <div className="cat-item">
      <img className="cat-item__image" src={ props.image } />
      <p className="cat-item__fact">
      { props.fact }
      </p>
    </div>
  );
}

export default CatItem;
