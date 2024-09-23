'use strict';

const randomPromiseObject = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('resolves with delay'), Math.random()*2000);

    setTimeout(()=>reject('rejects with timeout'), Math.random()*2000);
});

randomPromiseObject.then(console.log).catch(console.log);

randomPromiseObject
.then(message=>console.log(message))
.catch(err=>console.log(err));

randomPromiseObject.then(console.log).catch(console.log);