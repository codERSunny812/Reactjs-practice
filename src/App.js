import React , { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import   ClassComponent  from './ClassComponent';
class App extends Component {
  render() {

    // let name="sunny ";
    // let newName="hey guys its me sunny here ";
    // function apple(){
    //   name="hey it's me sunny here ";
    //   alert(name);
    //   alert("function is called ");
    // }
    // function update(){
    //   newName="hey it's me sunny here , how's you all  ";
    //   alert(newName);
    // }

    // now lets use state to update the data 

    const [name,setData]= useState("sunny")
    function updateData(){
      setData("sunny vlogs ")
    }

    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{name}</h2>
          <button onClick={updateData}>click me </button>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// export default App;

// jsx 

// import User from './User';

// function Component
// function App(){

//   return(
//     <div className="App">
//       JSX ?
//       <User />
//     </div>
//   );
// }

export default App;