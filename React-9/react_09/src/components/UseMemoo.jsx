import React, { useMemo, useState } from 'react'

function UseMemoo() {

    const [count,setCount] = useState(0);
    const [inp,setInp] = useState(0);
   
    function handleInp(e){
        setInp(e.target.value)
    }
    const memoCount = useMemo(()=>{
        let ans = 0;
        for(let item=1 ; item<=inp;item++){
            console.log("loop ran");
            ans+=item;
        }
        return ans;
    } , [inp])

  return (
    <div>
        <input onChange={handleInp} type="text" value={inp} />
        <h1>Sum: {memoCount}</h1>
        
        <h1>Count: {count}</h1>
        <button  onClick={()=>setCount(count+1)}>Incr.</button>
    </div>
  )
}

export default UseMemoo