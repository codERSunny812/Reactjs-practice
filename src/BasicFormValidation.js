import React, { useState } from "react";
function BasicForm(){
const [userid, setUserId]=useState(" ");
const [pass, setPass]=useState(" ");
function submit(e){
    alert("helo guys ")
e.preventDefault();
}

    return(
        <div><h1>login validation</h1>
        <form action="" onSubmit={submit}>
            <input type="email" placeholder="Enter your email id " /> <br /> <br />
            <input type="password" name="" id="" placeholder="Enter your password " /> <br /><br />
            <button type="submit">Smash Me</button>
        </form>
        </div>

    );
}


export default BasicForm;