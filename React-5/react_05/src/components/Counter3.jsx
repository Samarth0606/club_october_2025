import React, { useState } from 'react'

function Counter3() {

    const [count,setCount] = useState(0); //inital
    function handle3count(){
        setCount((count)=>count+5) // 5
        setCount((count)=>count+3) // 8
        setCount((count)=>count+7) // 15
        // normal => count => initial value
        // callback => count => prev value
    }

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={handle3count}>inc</button>
    </div>
  )
}

export default Counter3

// -------------------------------------------

// import React, { useState } from 'react'

// function Counter3() {

//     const [count,setCount] = useState(0);
//     function handle3count(){
//         // setCount(count+1) // 0 + 1  // 1
//         setCount((sam)=>sam+1) // prev value // 0+1 //1
//         // setCount(count+1) // 0 + 1  // 1
//         setCount((vohra)=>vohra+1) //1+1 //2
//         // setCount(count+1) // 0 + 1  // 1 // UI dominating
//         setCount((mav)=>mav+1) //2+1 //3 
//     }

//   return (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={handle3count}>inc</button>
//     </div>
//   )
// }

// export default Counter3