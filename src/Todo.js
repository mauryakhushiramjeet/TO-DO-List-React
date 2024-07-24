import React from 'react'
import "./TodoStyle.css";
import { useState } from 'react';
function generateld() {
  return Math.floor(Math.random() * 10);
}
const Todo = () => {
  const [todo, setTodo] = useState([])
  const [input, setInput] = useState("")

  const handleSubmit = () => {
   if( input===""){
    alert("please inter something")
   }else{
    setTodo((todo) =>
      todo.concat({
        text: input,
        id: generateld()
      })
    );}
    setInput("");
  }
  const RemoveTodo = (id) => {
    setTodo((todo) => todo.filter((t)=>t.id!== id));
  }
  

  return (
    <div className='container'>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='New Todo'></input>
      <button onClick={handleSubmit}>submit</button>
      <ul className='todolist'>{

        todo.map(({ text,id }) => (
          <li key={id} className='todo'>
            <span>{text}</span>
            <button className='remove' onClick={()=> RemoveTodo(id)}>x</button>
            {/* <button className=' complet' onClick={handlecomplete}>\</button> */}
          </li>
        ))}

      </ul>
    </div>
  )
}

export default Todo
