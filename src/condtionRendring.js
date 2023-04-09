import React, { useState } from "react";

function profile(){

    // const [loggedIn,setLoggedIn]=useState(false)
    const [loggedIn,setLoggedIn]=useState(1)

    return(
    <div className="App"> 
    {
        loggedIn==1?<h2>hey sushil </h2>: loggedIn==2?<h2>hello sunny </h2>: <h2>this is user 3</h2>
        }
    </div>
    );
}


export default profile;