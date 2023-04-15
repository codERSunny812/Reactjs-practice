import React, { useState } from "react";
function BasicForm(){
    /* eslint-disable */
const [userid, setUserId]=useState(" ");
const [pass, setPass]=useState(" ");
const[userErr, setUserErr]=useState(false);
const[userPassErr, setUserPassErr]=useState(false);


function email(e){
    let total=e.target.value;
    if(total.length<8){
        console.log("enter a valid email id ");
        setUserErr(true);
    }
    else{
        console.log("email id is good ");
        setUserErr(false);
    }
    setUserId(total);
}

function passChecker(e){
let passLen=e.target.value;
if(passLen.length<6){
    setUserPassErr(true);
console.log("passwrd is smaller than 5 digits");
}
else{
    setUserPassErr(false);
}
setPass(passLen);

}

function submit(e){
    if(userid.length<12 || pass.length<7){
        alert("enter the valid email id and password ");
    }
    else{
        alert("all is good ");
    }
    alert("helo guys ")
e.preventDefault();
}

    return(
        <div><h1>login validation</h1>
        <form action="" onSubmit={submit}>
            <input type="email" placeholder="Enter your email id "  onChange={email} /> {userErr?<span>invalid id </span>:null} <br /> <br />
            <input type="password" name="" id="" placeholder="Enter your password " onChange={passChecker} /> {userPassErr?<span>password should be greater than  digits </span>:null} <br /><br />
            <button type="submit">Smash Me</button>
        </form>
        </div>

    );
}


export default BasicForm;