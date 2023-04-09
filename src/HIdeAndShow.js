import React, { Component, useState }  from 'react';
import logo from './logo.svg';
import './App.css';

// hide and show of an element 

function App(){

const[status, hide]=useState(true);
return(
    {
        status?<h1>namaste react </h1>
:null
       }

      <h1>namaste react </h1>
       
       {/* hide and show usig button  */}

       <><button onClick={() => hide(false)}>hide </button><button onClick={() => hide(true)}>show</button></>
);
    }

    export default App;