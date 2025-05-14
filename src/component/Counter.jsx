import React from "react";
 function Counter(){
    let [count,setCount]=React.useState(0);
    return(
        <div className="App">
       
        <h1>Counter:{count} </h1>
          <button>Increment</button>
                <button>Decrement</button>
        </div>
    )
 }
 export default Counter;
