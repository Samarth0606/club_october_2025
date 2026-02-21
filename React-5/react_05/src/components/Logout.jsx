import React, { useState } from 'react'

function Logout( {naam} ) {

    const [user, setUser] = useState(naam);
    const [count,setCount] = useState(0);

    function handleLogout(){
        if(count % 2 == 0 ){
            setUser("Anonymous")
            setCount(count+1)
        }else{
            setUser("Samarth Vohra")
            setCount(count+1)
        }
    }

  return (
    <div>
        <h1>Name: {user}</h1>
        <button onClick={handleLogout}>Logout</button>
        
    </div>
  )
}

export default Logout


// ------------------------------------------------------------------

// import React from 'react'

// function Logout( {naam} ) {
//     let user = naam;
//     function handleLogout(){
//         console.log(user , "before"); 
//         user = "anonymous";
//         console.log(user , "after");
//     }

//   return (
//     <div>
//         <h1>Name: {user}</h1>
//         <button onClick={handleLogout} >Logout</button>
//     </div>
//   )
// }

// export default Logout