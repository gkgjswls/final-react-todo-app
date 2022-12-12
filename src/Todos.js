import React from 'react';
import { useState,useEffect,useRef } from 'react';
import Edit from './edit'
import red from './imgs/1.png'
import green from './imgs/2.png'
import edit from './imgs/edit.png'
import remove from './imgs/del.png'
function Todos({data,setData}){

  const [isEditMode, setEditMode] = useState(false);
  const handleEdit = (e,id) =>{

    setEditMode(!isEditMode)
    console.log(id)

  }
  const handleDelete = (e,id) =>{

    const deletedata = async () =>{
      await fetch(`http://localhost:3001/data/${id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
        })
        .then((res)=>(console.log))
        .catch((err)=>(console.log))
        window.location.reload()
        
  }
  deletedata()
  }
  
  return (
    <ul className="todos">
      {data.map((todo) => {
        return (
          <li className="todo" id={todo.id} key={todo.id}>
            <div className='form---wrapper'>
              <div className='importancy'>
                {(todo.importance === true)? <img src ={red} className='imporancy1'></img> : <img src={green} className='imporancy1'></img>}
              </div>
              <div className='mainText'>
                <div className='createAt'>
                {todo.scheduledTime}
                </div>
                <div className='todo_text'>
                {(todo.mainText && isEditMode ===false)? todo.mainText: <Edit isEditMode={isEditMode} setEditMode={setEditMode} todo={todo} data={data} setData={setData}/>}
                </div>
              </div>
              <div>
              <div className='check'>
                  <div className='checkdiv' onClick={(e)=>handleEdit(e,todo.id)}><img src = {edit} className='edit'></img></div>
                  <div className='checkdiv' onClick={(e)=>handleDelete(e,todo.id)}><img src = {remove} className='remove'></img></div>
              </div>
              
              </div>
            </div>
          </li>
        );
      })}
    </ul>
)}


export default Todos;