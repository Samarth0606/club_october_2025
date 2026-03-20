// const fs = require('fs')


console.log(1);

fs.readFile('sam.txt' , {} , (err,data)=>{
    if(err) throw err
    else{
        console.log(data.toString()); 
    }
})
console.log(2);
console.log(3);


// console.log(1);

// const result = fs.readFileSync('sam.txt' , {encoding:'utf-8'})
// console.log(result);

// console.log(2);

// console.log(3);



