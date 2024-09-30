'use strict'

const fs=require('fs');
const storageFile='./cars.json';

function search(key, value){
    return new Promise(async(resolve,reject)=>{
        if(key && value){
        fs.readFile(storageFile,'utf8',(err,data)=>{
            if(err){
                reject('read error');
            }
            else{
                const cars = JSON.parse(data);
                const found=[];
                for(const car of cars){
                    if(car[key]===value){
                        found.push(car);
                    }
                }
                resolve(found);
            }
        })
    }
    else{
        reject('parameter missing');
    }
    })
}

module.exports={search};  //export the function