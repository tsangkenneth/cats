import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import App from '../src/components/App';
import CatItem from '../src/components/CatItem';
import CatItemsList from '../src/components/CatItemsList';

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

describe('Tests for CatItemsList component', () => {
  let testItems = [
    {
      image: 'http://24.media.tumblr.com/tumblr_m0jbyzmDzi1qzv52ko1_1280.jpg',
      fact: `An adult lion's roar can be heard up to five miles (eight kilometers) away.`
    },
    {
      image: 'http://25.media.tumblr.com/tumblr_m0tyg2fySZ1qh432wo1_1280.jpg',
      fact: `Jaguars are the only big cats that don't roar.`
    },
    {
      image: 'http://25.media.tumblr.com/tumblr_m4mm4umuMc1qzkfbpo1_1280.jpg',
      fact: `Cats lived with soldiers in trenches, where they killed mice during World War I.`
    }
  ];
  let catItemsList = shallow(<CatItemsList catItems={ testItems } />);

  it('Renders a CatItemsList', () => {
    expect(catItemsList.find('.cat-items-list')).to.have.length(1);
  });

  it('Renders CatItems for items in prop `catItems`', () => {
    expect(catItemsList.children()).to.have.length(testItems.length);

    testItems.forEach((item, index) => {
      let currentItem = catItemsList.childAt(index);
      let currentItemProps = currentItem.props();

      expect(currentItem.type()).to.equal(CatItem);
      expect(currentItemProps.image).to.equal(item.image);
      expect(currentItemProps.fact).to.equal(item.fact);
    });
  });
});
