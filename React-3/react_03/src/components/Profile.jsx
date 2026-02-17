function Profile({myarr}){
    console.log(myarr);
    
    return(
        <div>
            {
                myarr.map((item)=>{
                    return(
                        <div>
                            <h1>Name: {item.name}</h1>
                            <h1>Age: {item.age}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Profile;