
'use strict';

require('../eventPool');

module.exports = (payload) =>  {
  setTimeout(() => {
    console.log(`========== We love our NEW THING! ===========` );
  }, 2000);
};
