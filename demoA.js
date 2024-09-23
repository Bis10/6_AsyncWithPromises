'use strict';

async function check(number){
    return new Promise((reslove, reject)=>{
        if(number<10){
            reject(`rejected (catch):number ${number} is less than 10`);
        }
        else{
            reslove(`resolved (then):number ${number} is 10 or more`);
        }
    });
}
// console.log(check(12)); // not working
// (check(12).then(console.log).catch(console.log));
// (check(1).then(console.log).catch(console.log));

// check(5)
// .then(message=>console.log(message))
// .catch(err=>console.log(err));

//async-wait

async function main(){
    try {
        const result = await check(15);
        console.log("try:", result);
        const result2 = await check(10);
        console.log('try:',result2);
        const result3 = await check(1); //rejects
        //jumps to the catch. Not executing the rest of try
        console.log("try:", result3);
        const result4 = await check(21);
        console.log("try:", result4);
    } catch (error) {
        console.log('err', error);
    }
}
// run the main function
// main();

async function main2(){
    try {
        console.log(await check(15));
    } catch (error) {
        console.log('err',error);
    }
    try {
      console.log(await check(1));
    } catch (error) {
      console.log('err',error);
    }
    try {
      console.log(await check(10));
    } catch (error) {
      console.log('err',error);
    }
}
main2();