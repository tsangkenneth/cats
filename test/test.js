import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import App from '../src/App';
import CatItem from '../src/CatItem';
import CatItemsList from '../src/CatItemsList';

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
  let catItemsList = mount(<CatItemsList />);

  it('Renders nothing in its initial state of empty `items`', () => {
    expect(catItemsList.state().catItems).to.be.instanceof(Array);
    expect(catItemsList.state().catItems.length).to.equal(0);
    expect(catItemsList.html()).to.equal(null);
  });

  it('Renders a CatItemsList and calls list constructor', () => {
    sinon.spy(CatItemsList.prototype, '_constructList');

    catItemsList.setState({
      catItems: [
        {
          image: 'http://25.media.tumblr.com/tumblr_mcpaawXG3b1qze0hyo1_500.jpg',
          fact: `Cats can't taste sweets.`
        }
      ]
    });

    expect(catItemsList.find('.cat-items-list')).to.have.length(1);
    expect(CatItemsList.prototype._constructList.calledOnce).to.equal(true);
  })

  it('Renders CatItems for items in `catItems`', () => {
    catItemsList.setState({
      catItems: [
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
      ]
    });

    const list = catItemsList.instance()._constructList();

    expect(list).to.be.instanceof(Array);
    expect(list.length).to.equal(3);

    expect(mount(list[0]).type()).to.equal(CatItem);
    expect(list[0].props.image).to.equal('http://24.media.tumblr.com/tumblr_m0jbyzmDzi1qzv52ko1_1280.jpg');
    expect(list[0].props.fact).to.equal(`An adult lion's roar can be heard up to five miles (eight kilometers) away.`);

    expect(mount(list[1]).type()).to.equal(CatItem);
    expect(list[1].props.image).to.equal('http://25.media.tumblr.com/tumblr_m0tyg2fySZ1qh432wo1_1280.jpg');
    expect(list[1].props.fact).to.equal(`Jaguars are the only big cats that don't roar.`);

    expect(mount(list[2]).type()).to.equal(CatItem);
    expect(list[2].props.image).to.equal('http://25.media.tumblr.com/tumblr_m4mm4umuMc1qzkfbpo1_1280.jpg');
    expect(list[2].props.fact).to.equal(`Cats lived with soldiers in trenches, where they killed mice during World War I.`);
  });
});
