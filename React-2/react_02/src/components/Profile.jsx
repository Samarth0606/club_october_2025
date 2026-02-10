function Profile({name,age,isMale,color}){  //destructuring

    return(
        <section>
            <div>
                <h1>Name: {name} </h1>
                <h1>Age: {age}</h1>
            </div>
            <div>
                <h2>Color: {color}</h2>
                <h2>IsMale: { JSON.stringify(isMale) }</h2>
            </div>
        </section>
    )
}

export default Profile;

// ------------------------------------------------

// function Profile(props){ //object with arguments/attributes

//     console.log(props.name , props.age);
    

//     return(
//         <section>
//             <div>
//                 <h1>Name: {props.name} </h1>
//                 <h1>Age: {props.age}</h1>
//             </div>
//             <div>
//                 <h2>Color: {props.color}</h2>
//                 <h2>IsMale: { JSON.stringify(props.isMale) }</h2>
//             </div>
//         </section>
//     )
// }

// export default Profile;