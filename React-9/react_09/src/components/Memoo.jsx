import React, { memo, useState } from 'react'

function Memoo({umar}) {
    const [age,setAge] = useState(umar)
    function handleAge(){
        setAge(Math.floor(Math.random()*10))
    }
  return (
    <div>
        <Chotu age={age} />
        <button onClick={handleAge}>Umar badal dunga</button>
        <Chotu age={40} />
        <Chotu age={70} />
    </div>
  )
}

const Chotu = memo( function({age}) {
  return (
    <div>Chotu - {age} </div>
  )
} )


export default Memoo