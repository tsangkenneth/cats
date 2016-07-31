import React, { Component } from 'react';
import CatItem from './CatItem';

class CatItemsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catItems: []
    };
  }

  render() {
    if (!this.state.catItems.length) {
      return null;
    }

    return (
      <div className="cat-items-list">
        { this._constructList() }
      </div>
    )
  }

  _constructList() {
    return this.state.catItems.map((item, index) => {
      return (
        <CatItem
          key={ index }
          image={ item.image }
          fact={ item.fact } />
      );
    });
  }
}

export default CatItemsList;
