import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../src/App';
import CatItem from '../src/CatItem';

describe('Test suite for App component', () => {
  it('App should exist', () => {
    expect(shallow(<App />)).to.exist;
  });
});

describe('Tests for CatItem component', () => {
  let catItem = shallow(<CatItem image={'http://25.media.tumblr.com/tumblr_mcpaawXG3b1qze0hyo1_500.jpg' } fact={`Cats can't taste sweets.`} />);

  it('CatItem should exist', () => {
    expect(catItem).to.exist;
    expect(catItem.type()).to.equal('div');
    expect(catItem.hasClass('cat-item')).to.equal(true);
  });

  it('Should display one cat picture and one cat fact', () => {
    let catImage = catItem.childAt(0);

    expect(catImage.type()).to.equal('img');
    expect(catImage.hasClass('cat-item__image')).to.equal(true);
    expect(catImage.html()).to.contain('src="http://25.media.tumblr.com/tumblr_mcpaawXG3b1qze0hyo1_500.jpg"');

    let catFact = catItem.childAt(1);

    expect(catFact.type()).to.equal('p');
    expect(catFact.hasClass('cat-item__fact')).to.equal(true);
    expect(catFact.text()).to.equal(`Cats can't taste sweets.`);
  });
});
