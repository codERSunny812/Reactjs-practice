import React, { Component, useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import students from './propsInFunctionalComponents'; 
// import   ClassComponent  from './ClassComponent';
function App(){

    // let name="sunny ";
    // let newName="hey guys its me sunny here ";
    // function apple(){
    //   name="hey it's me sunny here ";
    //   alert(name);
    //   alert("function is called ");
    // }
    
    // now lets use state to update the data 
    // const [data,setData]=useState("sunny");
    // function updateData(){
    //   setData("suny vlogs ")
    // }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{data} </h2>
          <students Name={"sunny"} email="sengersunny44@gmail.com"/>
          {/* similarly you can pass many value in this   */}
          <button onClick={updateData}>click me </button>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
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

// how to make the class Component from a function Component

//  import React , {Component } from 'react'
//  class App extends Component{


  // render(){
    // return ( 
      // write your code 
    // );
  // }
//  }


export default App;