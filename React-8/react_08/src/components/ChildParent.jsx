import React from 'react'

function ChildParent() {
    function handleClick(d){
        console.log(d);
    }
  return (
    <div>
        <Chotu handleClick={handleClick} />
    </div>
  )
}

function Chotu({handleClick}){
    let data = "mai hu chotu";
    return(
        <div>
            <h1 onClick={()=>handleClick(data)} >kid</h1>
        </div>
    )
}

export default ChildParent