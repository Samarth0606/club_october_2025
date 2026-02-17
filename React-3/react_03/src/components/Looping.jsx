function Looping(){
// statements - if,else,for,while,clg,varible,fn
    let arr = ["sam", "mav", "vohra"];

// executables - map,filter,ternary
    return(
        <div>
            {
                arr.map( (item,index)=>{
                    return(
                        <div>
                            <h1>{item}= {index}</h1>
                        </div>
                    )
                } )
            }
        </div>
    )
}

export default Looping;

