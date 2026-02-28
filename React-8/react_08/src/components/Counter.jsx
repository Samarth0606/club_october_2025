// import React from "react";
// export default class Counter extends React.Component{

//     componentDidUpdate(prevProp,prevState){
//         if(this.props.count !== prevProp.count){
//             console.log("i am updated");
//         }
//     }
// // this will be executed when component is destroyed
//     componentWillUnmount(){}

//     render(){
//         return(
//             <div>
//                 <h1>Count: {this.props.count}</h1>
//             </div>
//         )
//     }
// }

// -------------------------------

import React, { useEffect, useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        if(count === 0){
            console.log("Component mounter");  
        }
        else if(count>0 && count<=5){
            console.log("Component did update");
        }
        else if(count===6){
            return ()=>{ console.log("component did unmount") }
        }
    }, [count])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)} >increment</button>
    </div>
  )
}

export default Counter