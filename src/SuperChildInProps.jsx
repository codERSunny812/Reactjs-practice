import React from "react";
function Child(props){
    return(
        <div className="app">
            <h1>hey its me super child </h1>
            <button onClick={props.data}> smash me </button>
        </div>
    );

}

export default Child;
