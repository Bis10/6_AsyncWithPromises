'use strict';

async function start(){
    return Promise.resolve('Task started');
}

async function middle(data){
    return Promise.resolve(data+ '.' + 'we are in the middle');
}

async function end(data){
    return Promise.resolve(data + "." + "end of task");

}

// start()
//     .then(data=>middle(data))
//     .then(result=>end(result))
//     .then(message=>console.log(message, '.', 'We are done!'));

// start().then(middle).then(end).then(console.log);


(async function(){
    const data = await start();
    console.log(data);
    console.log(data, 'Moving to the next phase...');
    const result = await middle(data);
    console.log(result);
    const message= await end(result);
    console.log(message);
    console.log('We are done');
})();