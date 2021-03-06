import React from 'react';
import CatItem from './CatItem';
import './CatItemsList.css';

const CatItemsList = (props) => {
  let _constructList = () => {
    return props.catItems.map((item, index) => {
      return (
        <CatItem
        key={ index }
        image={ item.image }
        fact={ item.fact }
        onRemoveButtonClick={() => props.onRemoveButtonClick(index)} />
      );
    });
  };

  if (!props.catItems.length) {
    return null;
  }

  return (
    <div className="cat-items-list">
      { _constructList() }
    </div>
  );

}

export default CatItemsList;
