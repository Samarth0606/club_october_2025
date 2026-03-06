import React, { useRef, useState } from 'react'

function Reff() {
    const [count,setCount] = useState(0);
    const countRef = useRef(0)
    function handleRef(){
        countRef.current++
    }
  return (
    <div>
        <button onClick={()=>setCount(count+1)} >State - {count}</button>
        <button onClick={handleRef} >Ref - {countRef.current}</button>
    </div>
  )
}

export default Reff