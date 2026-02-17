function Person({naam,isBoy,age,favRang}){
    
    return(
        <div style={ {border:"2px solid black", backgroundColor:"red", fontSize:"8px"} } >
            <h1>Name: {naam} </h1>
            <h1>Age: {age} </h1>
            {/* <h1>isMale: {isBoy} </h1> */}
            <h1>isMale: {JSON.stringify(isBoy)} </h1>
            <h1>favColor: {favRang} </h1>
        </div>
    )
}

export default Person;

// -------------------------------------

// function Person(props){
//     console.log(props);
    
//     return(
//         <div>
//             <h1>Name: </h1>
//             <h1>Age: </h1>
//             <h1>isMale: </h1>
//             <h1>favColor: </h1>
//         </div>
//     )
// }

// export default Person;