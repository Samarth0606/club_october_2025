"use strict";
// let user = {
//     firstName: "Samarth",
//     lastName: "VOHRA",
//     email: "sam@gmail.com",
//     isMale: true,
//     age: 99
// }
// function isLegal(user:{
//     firstName: string,
//     lastName: string,
//     email: string,
//     isMale: boolean,
//     age: number
// }){
//     return user.age>18 ? true:false
// }
// isLegal(user)
// ----------------------------------------
// interface User{
//     firstName: string,
//     lastName: string,
//     email: string,
//     isMale?: boolean,
//     age: number
// }
// let user = {
//     firstName: "Samarth",
//     lastName: "VOHRA",
//     email: "sam@gmail.com",
//     isMale: true,
//     age: 99
// }
// interface Person{
//     phone: number,
//     size: number
// }
// let person = {
//     phone: 9999,
//     size: 42
// }
// function isLegal(user:User , person:Person){
//     return user.age>18 ? true:false
// }
// isLegal(user, person)
// ----------------------------------------
// interface Person{
//     name:string,
//     age:number,
//     greet():void
// }
// interface X{
//     name:string,
//     age:number,
// }
// interface Y extends X{
//     greet():void
// }
// // class Student extends Class{
// class Student implements Y{
// class Student implements Person{
//     name:string;
//     age:number;
//     constructor(n:string,a:number){
//         this.name = n
//         this.age = a
//     }
//     greet(){
//         console.log(``);
//     }
// }
// let s1 = new Student("Sam" , 12)
// ----------------------------------------
// function sam(id:number | string){
//     console.log(id);
// }
// sam(1)
// sam("1")
// ----------------------------------------
// type Umar = number | string | boolean;
// function sam(id: Umar){
//     console.log(id);
// }
// sam(1)
// sam("1")
// ----------------------------------------
// type DSA = {
//     teach: string,
//     leetcode: number
// }
// type WEB = {
//     teach: string,
//     project: number
// }
// type Sam = DSA & WEB;
// const mav:Sam = {
//     teach: "Samarth",
//     leetcode: 123,
//     project: 5
// }
// ----------------------------------------
let arr = [10, 20, 30, 40, 50];
function maxi(arr) {
    let max = 0;
    for (let item of arr) {
        if (item >= max) {
            max = item;
        }
    }
    return max;
}
console.log(maxi(arr));
