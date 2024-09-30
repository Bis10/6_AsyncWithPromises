"use strict";

async function start() {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve("Task started"), 2000)
  );
}

async function middle(data) {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(data + " we are in the middle"), 3000)
  );
}

async function end(data) {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(`${data} end of task`), 1000)
  );
}


start().then(middle).then(end).then(console.log);

async function doTasks(){
    const data = await start();
    console.log(data+ '. Moving to the next phase...');
    const result = await middle(data);
      console.log(result + ". Moving to the next phase...");
       const message = await middle(result);
        console.log(message + ". we are done");
}
doTasks();