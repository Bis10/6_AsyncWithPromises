// carStorageV2.js

"use strict";
const fs = require("fs");
// const fs = require("fs").promises;

function initSearch(filename = "./cars.json") {
  const storageFile = filename;

  function search(key, value) {
    return new Promise(async (resolve, reject) => {
      if (key && value) {
        try {
          const data = await fs.promises.readFile(storageFile, "utf8");
          // await fs.readFile(storageFile, "utf8");
          const cars = JSON.parse(data);
          const found = [];
          for(const car of cars){
            if(car[key] === value){
                found.push(car);
            }
          }
          resolve(found)
        } catch (err) {
          reject("read error");
        }
      } else {
        reject("parameter missing");
      }
    });
  } // end of search

  return search;
} // end of initSearch

module.exports = { initSearch };
