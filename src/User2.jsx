import React from "react";
import './App.css';
function User2(props){
    return(
        <div className="App">
            <h1>user components</h1>
            <span>{props.data.name}</span>
            <span>{props.data.emailN}</span>
            <span>{props.data.gender}</span>
        </div>
    )
}

export default User2;