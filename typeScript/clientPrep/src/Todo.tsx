import { useState } from "react";
interface TodoType{
    title:string;
    disc:string;
    done:boolean
}
interface TodoInput{
    todo:TodoType;
}

function Todo({todo}:TodoInput){ //this is destruction
   const [isDone, setIsDone]=useState(todo.done);

   const handelchange=()=>{
    setIsDone(!isDone)
}
   return (
    <div>
        <h1>{todo.title}</h1>
        <h2>{todo.disc}</h2>
        <label htmlFor="">
            <input type="checkbox"
            checked={isDone}
            onChange={handelchange}
             />
        </label>
    </div>
   )
}
export default Todo
