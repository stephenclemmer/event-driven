'use strict';

const eventPool = require('./eventPool');
const requestHandler = require('./drivers/requestHandler');
const pickedUpHandler = require('./vendors/pickedUpHandler');
const deliveredHandler = require('./vendors/deliveredHandler');

const Chance = require('chance');
const chance = new Chance();

eventPool.on('PICKUP', requestHandler);
eventPool.on('INTRANSIT', pickedUpHandler);
eventPool.on('DELIVERED', deliveredHandler);

setInterval(() => {
  const order = {
    store: chance.company(),
    orderID: chance.guid({ version: 4 }),
    customer: chance.name(),
    address: chance.address(),
  };

  eventPool.emit('PICKUP', { order });
  console.log(`************ Pick up for delivery *****************` );
}, 9000);





