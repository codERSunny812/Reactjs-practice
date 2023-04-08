import React, { Component, useState } from "react";
// function App(){
    const [name,setData]=useState("sunny")
    function updateTheName(){
        setData("sunny vlogs")

    }
    return(
        <div className="blank">
            <h1>{data}</h1>
            <button onClick={updateTheName} > smash me</button> 
        </div>
    );
// }

export default App;



// now lets convert this into class components components

class App extends Component{
    constructor(){

        super();
        this.state={
            data:"anil"
        }
    }
 onUpdate(){
    alert("update")
    this.setState({data:"sunny"})

} 
    render(){      


        return(
            <div className="app">
                <h1>hey im a class components </h1>
                <h2>{this.state.data}</h2>
                class components mai aise hi 
                <button onClick={()=>this.onUpdate}>smash me </button>
                 </div>
        );
    }
}