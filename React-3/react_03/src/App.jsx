import Cartoon from "./components/Cartoon";
import Looping from "./components/Looping";
import Profile from "./components/Profile";
// import Person from "./components/Person";

function App(){
  // const newArr = [
  //   {name: "Sam", age: 31},
  //   {name:"Vohra", age: 21},
  //   {name:"code_baithak", age: 1},
  // ]

  const cartoons = [
    {
      id: 1,
      name: 'Mickey Mouse',
      superpower: 'Invisibility',
      magnitude: 1
    },
    {
      id: 2,
      name: 'Spongebob Squarepants',
      superpower: 'Super Strength',
      magnitude: 3
    },
    {
      id: 3,
      name: 'Bugs Bunny',
      superpower: 'Teleportation',
      magnitude: 9
    },
    {
      id: 4,
      name: 'Tom and Jerry',
      superpower: 'Intelligence',
      magnitude: 8
    },
    {
      id: 5,
      name: 'The Powerpuff Girls',
      superpower: 'Flight',
      magnitude: 10
    }
  ]

  return(
    <div>
      <Cartoon cartoons={cartoons}  />
      {/* <Profile myarr={newArr} /> */}
      {/* <Looping /> */}
      <h1>Hello from APP</h1>
      {/* props */}
      {/* <Person naam="Samarth" age={10} isBoy={true} favRang="Blue" />
      <Person naam="Maverick" age={4} isBoy={true} favRang="Brown" /> */}
    </div>
  )
}

export default App;