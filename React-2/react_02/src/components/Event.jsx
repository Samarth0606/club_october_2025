function Event(){

    function handleClick(){
        console.log("btn clicked");
    }

    function anotherFn(x,y,z){
        console.log("btn clicked again",x,y,z);
    }

    return(
        <div>
            {/* <button onClick={handleClick()} >DOM Click me 1</button> */}
            <button onClick={handleClick}>React Click me 1</button>
            <button onClick={ ()=>anotherFn(10,20,30) } > Click 2 </button>
        </div>
    )
}
export default Event;