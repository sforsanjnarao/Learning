import React, {useState} from 'react'
import '../App.css';

const FrontendTodo = () => {
  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState([])

  const handelOnClick = () => {
    const item={
      id: todoList.length+1,
      text: todo,
      check: false
    }
    setTodoList(prev=>[...prev, item])
    setTodo(""); 
  }
  const toggle=(id)=>{
    setTodoList(
      todoList.map((e)=>{
        if(e.id ==id)  {
          return {...e, check: !e.check}
        }else return e
      })
    )
  }

  const handelDelete=(id)=>{
    setTodoList(prev=> prev.filter(e=>e.id !== id))
  }

  return (
    <div>
      <h1>Todo</h1>
      <input type="text" placeholder='enter the task' value={todo} onChange={e=>setTodo(e.target.value)}/>
      <button onClick={handelOnClick}>add</button>

      <div>
       {todoList.map((e)=> 
          <ul key={e.id}>
            <input type="checkbox" checked={e.check} onChange={()=>toggle(e.id)}/>
            <p className={e.check ? 'strikthrough' : ""}>{e.text}</p>
            <button onClick={()=>handelDelete(e.id)}>Delete</button>
         </ul>
       )}
      </div>
    </div>
  )
}

export default FrontendTodo