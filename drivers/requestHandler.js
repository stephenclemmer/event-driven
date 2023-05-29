'use strict';

let eventPool = require('../eventPool');

module.exports = (payload) =>  {
  setTimeout(() => {
    eventPool.emit('INTRANSIT', payload);
    console.log('__________ Order in Transit_______________', payload);
  }, 3000);
};
