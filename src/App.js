// import React, { Component, useState }  from 'react';
// import logo from './logo.svg';
// import './App.css';
// import students from './propsInFunctionalComponents'; 
// import   ClassComponent  from './ClassComponent';
// function App(){

      // states in functional Component
    //  state to update the data 
    // const [data,setData]=useState("sunny");
    // function updateData(){
    //   setData("suny vlogs ")
    // }



  // get input box 

  // const [data,setData]=useState(null);

  // function getData(val){
  //   console.log(val.target.value);
  //   setData(val.target.value);

  // } 

  




    
  
    // return (
    //   <div className="App">
    //     <div className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
          

    //       <h2>{data} </h2>

    //       {/* props in react and you can use many values in this  */}

    //       <students Name={"sunny"} email="sengersunny44@gmail.com"/>

          

    //       <button onClick={updateData}>click me </button>

    //     </div>
        

    //     {/* input in   react */}

    //   <input type="text"  onChange={getData}/>


//       </div>
//     );
//   }

// export default App;


// // baisc form in react js 

// import "./App.css"
// import React, { useState } from "react"

// function App(){

//   const [name,setName]=useState(" ");
//   const [term, setTerms]=useState(false);
//   const [option, setOption]=useState("");

//   function getFormData(e){
//     console.log(name,option,term);
//     e.preventDefault();

//   }
//   return(
//     <div className="App"> 
//       <h1>handle forms in react </h1>
//       <form action="" onSubmit={getFormData}>
//         <input type="text"  placeholder="enter your name" onChange={(e)=>setName(e.target.value)} />  <br /> <br />
//         <select name="" id="" onChange={(e)=>setOption(e.target.value)}>

//           <option value="">Marvel</option>
//           <option value="">DC </option>

//         </select>
//         <br /> <br />
//         <input type="checkbox" name="" id="" onChange={() =>setTerms(e.target.checked)} /> <span>accept the term and condition </span>

//         <button> submit</button>

//       </form>

//     </div>
//   )
// }

// export default App;

// condition rendering in react 

// import "./App.css";
// import React from "react";
// import profile from "./condtionRendring";

// function App(){
//   return(
//     <div className="App">
//       <h1>condition rendring </h1>
//       <profile />
//     </div>
//   )
// }

// export default App;

// basic form validation 

// import "./App.css";
// import React from "react";
// import BasicForm from "./BasicFormValidation";


// function App(){
//   const data=true;
//   return(
//     <div className="App">
//       <h1>Basic form validation  </h1>
//       <BasicForm />
//     </div>
//   ); 
// }

// export default App;

 

// pass function as props 


import "./App.css";
import React from "react";
import PassFun from "./passFunctionAsProps";
function App(){
  function getData(){
    alert("namaste react")
  }
  return(
    <div className="App">
      {/* <h1> pass function as props  </h1>  */}
      <PassFun  data={getData}/>
      <div className="superchild">
      <h1>hey this is me super child</h1>
      <Child data={getData} />
    </div>
    </div>
    
  ); 
}

export default App;

