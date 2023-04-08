// props in functional components 

// function students(props){
//    return(
// <div className="blank">
//     <h1>props in react</h1>
//     <h2>hello {props}</h2>
//     {/* props give you a list which has key value pair   */}
// </div>
//    ); 
// }
// export default students;

 
// props in class componets 


import React, { Component }  from "react";

class students extends Component{
    render(){

        // how to check which is coming in our props
        console.log(this.props); 
        return(
            <div className="blank">
                <h1>student {this.props.name}</h1>
            </div>
        );
    }
}

export default students;