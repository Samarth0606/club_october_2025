// import React from "react";
// import Counter from "./components/Counter";

// export default class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       count: 0,
//     }
//   }
//   componentDidMount(){
//     console.log("component did mount");
//   }
//   decrement() {
//     this.setState({count: this.state.count-1})
//   }

//   render(){
//     return(
//       <div>
//         <h1>Hello from class based component</h1>
//         <button onClick={this.decrement.bind(this)} >Decrease count</button>
//         <Counter count={this.state.count} />
//         <button onClick={()=> this.setState({count: this.state.count+1})} >Increase count</button>
//       </div>
//     )
//   }
// }

// ---------------------------------------

import React from 'react'
import Counter from './components/Counter'

function App() {
  return (
    <div>
      <Counter />
    </div>
  )
}

export default App