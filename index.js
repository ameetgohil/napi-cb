const addon = require('./build/Release/addon.node');

addon.add(2,3,() => { console.log('Done'); });
