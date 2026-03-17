const a = "sam"

const b = {
    x: 10
}

const c = (y,z)=>{
    console.log(y+z);
}
// console.log(b , "1");
// console.log(a , "1");
// c(10,20);
// module.exports = a
// module.exports = b
module.exports = {a,b,c}
// by default what is exported {}