import { useState } from "react";

function Cartoon({cartoons}) {
    const [filteredCartoon,setFilteredCartoon] = useState(cartoons);
    // console.log(cartoons);
    function handleAbove(){
        setFilteredCartoon( cartoons.filter(item => item.magnitude>5) )
    }
    function handleBelow(){
        setFilteredCartoon( cartoons.filter(item => item.magnitude<5) )
    }
    function handleAll(){
        setFilteredCartoon( cartoons )
    }
  return (
    <div>
        {
            filteredCartoon.map((item)=>{
                return(
                    <div>
                        <h1>{item.name}</h1>
                        <h1>{item.superpower}</h1>
                        <h1>{item.magnitude}</h1>
                    </div>
                )
            })
        }
        <button onClick={handleAbove} >Above 5</button>
        <button onClick={handleBelow} >Below 5</button>
        <button onClick={handleAll} >All</button>
    </div>
  )
}

export default Cartoon