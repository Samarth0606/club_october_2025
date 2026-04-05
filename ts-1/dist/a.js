"use strict";
// let kaam:string = "study well for interviews" //inference
// let math:number = 19;
// math=1231
// console.log(kaam);
// console.log(math);
// 	1. Create a fn that takes username as input
// and prints greeting from username
// 	2. You take age as input and check if user is above 18 
// 	or not
// function random(username:string):string{
//     console.log(`greetings from ${username}`);
//     return `greetings from ${username}`
// }
// random("samarth")
// --------------------------------
// function checkage(age:number):boolean{
//     if(age>18){ 
//         return true; 
//     }
//     else{ 
//         return false;
//     }
// }
// checkage(19)
// --------------------------------
// function checkage(age:number):boolean{
//    return (age>18) ?  true :  false
// }
// checkage(19)
// --------------------------------
// 1 fn is an argument to another function
// function a():void{
//     console.log("hello");
// }
// function b(fn:()=>void):string{
//     return `hello ji`
// }
// b(a)
// --------------------------------
var a = 10;
var b = 100;
var c = 1000;
var arrow = function () {
    console.log("hello");
};
