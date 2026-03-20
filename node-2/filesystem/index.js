const fs = require('fs');

// CREATE
// let data = "welcome to code baithak";
// let data2 = "welcome to maverick world";
// // fs.writeFileSync('sam.txt' , data)
// fs.writeFileSync('mav.txt' , data2 , {})

// optinal parameter?
// fs.writeFileSync('mav.txt' , data2 , {encoding:'utf-8', flag:'w'})

// fs.writeFile('sam.txt' , "balle balle" , {} , (err)=>{
//     if(err){ throw err}
//     else{
//         console.log("file written successfully"); 
//     }
// })

// READ

// fs.readFile
// let data = fs.readFileSync('sam.txt' , {encoding:'utf-8'})
// console.log(data);

// let data = fs.readFileSync('sam.txt' , {})
// console.log(data.toString());

// fs.readFile('sam.txt' , {} , (err,data)=>{
//     if(err){ throw err}
//     else{
//         console.log(data.toString());
//     }
// })

// UPDATE
// fs.appendFile()
// fs.appendFileSync('sam.txt' , "i am new data" , {} )
// fs.appendFileSync('sam.txt' , "\ni am samarth vohra" , {} )

// fs.appendFile('sam.txt' , "\nCode Baithak video-10 is live" , {} , (err)=>{
//     if(err){ throw err}
//     else{
//         console.log("file updated successfully");
//     }
// })


// DELETE
// fs.unlink()
// fs.unlinkSync('mav.txt')
fs.unlink('sam.txt' , (err)=>{
    if(err) throw err;
    else{
        console.log("file deleted successfully");
    }
})

// COPY









