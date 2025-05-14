import React from "react";
function Todolist(){
    let[todos,setTodo]=React.useState( ["get car","buy new house","get new bick"])
        return (
            <div>
                <h1>Todolist</h1>
                <input type="text"></input>
               <ul>
                {
                    todos.map((todo)=>{
                        return <li>{todo}</li>
                    })
                }
               </ul>
            </div>
        )
    
}
export default Todolist;