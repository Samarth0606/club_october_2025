import React, { useEffect, useState } from 'react'

function Clock() {
    const [time,setTime] = useState(0);
    useEffect(()=>{
        setTimeout(function(){
            setTime(time+1)
        }, 1000)
    },[time])

  return (
    <div>Clock: {time}</div>
  )
}

export default Clock



// import React, { useEffect, useState } from 'react'

// function Clock() {
//     const [time,setTime] = useState(0);
//     // multiple timers are created
//     useEffect(()=>{
//         let id = setInterval(function(){
//             setTime(time+1)
//         }, 1000)
//         // cleanup fn
//         return ()=> clearInterval(id)
//     },[time])

//   return (
//     <div>Clock: {time}</div>
//   )
// }

// export default Clock