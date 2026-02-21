import React, { useState } from 'react'

function Counter() {

    const [count,setCount] = useState(0);

    function handleInc(){
        setCount(count+1)
    }
    function handleDec(){
        setCount(count-1)
    }

  return (
    <div>
        <button onClick={handleInc} >Inc</button>
        <h1>Count: {count}</h1>
        <button onClick={handleDec} >Dec</button>
    </div>
  )
}

export default Counter