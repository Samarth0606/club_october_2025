// import React, { useEffect, useRef, useState } from 'react'

// function Dom() {

//     // let [salary,setSalary] = useState(50000);
//     let spanEl = useRef(50000);

//     // console.log(spanEl.current);

//     useEffect(()=>{
//         setTimeout(()=>{
//             spanEl.current.innerHTML = "25000"
//         }, 3000)
//     } , [])
    
//   return (
//     <div>
//         <h1>Salary <span ref={spanEl}> {spanEl.current} </span> </h1>
//     </div>
//   )
// }

// export default Dom

// --------------------------------------------------------

// import React, { useEffect } from 'react'

// function Dom() {

//     let salary = 50000;

//     useEffect(()=>{
//         setTimeout(()=>{
//             document.getElementById("salary").innerHTML="25000"
//         }, 3000)
//     } , [])
    
//   return (
//     <div>
//         <h1>Salary <span id='salary'> {salary} </span> </h1>
//     </div>
//   )
// }

// export default Dom