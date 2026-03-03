import React, { memo, useCallback, useState } from 'react'

function UseCallback() {
    const [count,setCount] = useState(0);
    // let a = 10;
    let a = useCallback(function(){ console.log("hi") } , [])
  return (
    <div>
        <Chotu prop={a} />
        <button onClick={()=>setCount(count+1)}>Click</button>
        <h1>Count: {count}</h1>
    </div>
  )
}

const Chotu = memo( function({prop}){
    return(
        <div>
            <h1>Chotu: {prop()}</h1>
        </div>
    )
} )


export default UseCallback