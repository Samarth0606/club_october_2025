import Person from "./components/Person";

function App(){
  return(
    <div>
      <h1>Hello from APP</h1>
      {/* props */}
      <Person naam="Samarth" age={10} isBoy={true} favRang="Blue" />
      <Person naam="Maverick" age={4} isBoy={true} favRang="Brown" />
    </div>
  )
}

export default App;