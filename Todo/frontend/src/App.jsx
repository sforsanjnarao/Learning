import React, {useState} from 'react'
import './App.css';

const App = () => {
  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState([])

  const handelOnClick = () => {
    setTodoList(prev=>[...prev, todo])
    setTodo(""); 
  }

  return (
    <div>
      <h1>Todo</h1>
      <input type="text" placeholder='enter the task' value={todo} onChange={e=>setTodo(e.target.value)}/>
      <button onClick={handelOnClick}>add</button>

      <div>
       {todoList.map((e, index)=> 
          <ul key={index}>
            <input type="checkbox" />
            <p>{e.list}</p>
            <button>Delete</button>
         </ul>
       )}
      </div>
    </div>
  )
}

export default App