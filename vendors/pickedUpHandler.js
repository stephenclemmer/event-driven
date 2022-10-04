
'use strict';

const eventPool = require('../eventPool');

module.exports = (payload) =>  {
  setTimeout(() => {
    eventPool.emit('DELIVERED', payload);
    console.log('- - - - - - - Order has been delivered - - - - - ');
  }, 2000);
};

