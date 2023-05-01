import React, { forwardRef } from "react";

function ChildRef(props,Inputref){
    return(
        <div className="App">
            <h1>forward ref child in reactjs </h1>
<input type="text" ref={Inputref} />
    
        </div>
    );
}


export default forwardRef(ChildRef);