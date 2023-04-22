import React from "react";

function Child2(prop){
   const myName="sunny pandey "
    return(
        <div className="App">
            <h1>child in the lifting up state </h1>
            <h3>my name is : {prop.name}</h3>
            <button onClick= {()=>prop.alert(myName)}>click me </button>
        </div>
    );
}


export default Child2;