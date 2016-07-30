require('babel-register')();

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

// No-ops for Webpack imports that are not scripts
function noOp() {
  return null;
}

require.extensions['.css'] = noOp;
require.extensions['.scss'] = noOp;
require.extensions['.svg'] = noOp;
