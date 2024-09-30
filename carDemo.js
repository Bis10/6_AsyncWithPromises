'use strict'

const {search} = require('./carStorageFilePromise');
// console.log(search('licence', 'ABC-1')); //wrong->Pending

search("licence", "ABC-1")
.then(console.log)
.catch(console.error);

// This return faster then previous one because if the key and value is not there then it didn't enter the loop in carStorageFilePromise.js
search()
.then(console.log)
.catch(console.error);