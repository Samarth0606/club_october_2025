import React, { useContext, useState } from 'react'
import { CountContext } from './Context';

function PropDrilling() {
    const [count,setCount] = useState(0);

  return (
    <div>
        <CountContext.Provider value={count}>
            <CountComponent setCount={setCount}/>
        </CountContext.Provider>
    </div>
  )
}

function CountComponent({setCount}){
    let count = useContext(CountContext)
    return(
        <>
            <h1>Count: {count}</h1>
            <ButtonComponent setCount={setCount} />
        </>
    )
}

function ButtonComponent({setCount}){
    let count = useContext(CountContext)
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Inc</button>
            <button onClick={()=>setCount(count-1)}>Dec</button>
        </div>
    )
}

export default PropDrilling