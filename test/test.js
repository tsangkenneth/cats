import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../src/App';

describe('Test suite for App component', () => {
  it('App should exist', () => {
    expect(shallow(<App />)).to.exist;
  });
});
