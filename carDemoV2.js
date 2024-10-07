'use strict'

const {initSearch} = require('./carStorageV2');

const search = initSearch();
search('model', 'Nova').then(console.lgo).catch(console.log);