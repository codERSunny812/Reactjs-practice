import React from "react";

function PassFun(prop){
    return(
        <div>
            <h2>function new components</h2>
            <button  onClick={prop.data}>click me </button>
        </div>
    );
}

export default PassFun;