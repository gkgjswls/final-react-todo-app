import react from 'react'
import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
function Editform({setValue}){
  
  const [newTime, setTime] = useState('');
  const [maintext,setMaintext] = useState('')
  const [is,setIs] = useState(false)
  const importance = useRef(null);

  const handleInputChange = (e) => {

    setMaintext(e.target.value);
  };

  const handleKeyUp = (event) => {

      if (event.code === 'Enter') {
    
        const reqbody ={
          id: uuidv4(),
          mainText: maintext,
          scheduledTime: newTime,
          importance: Boolean(importance.current.value)

        }
        
        const post = async () =>{
          await fetch('http://localhost:3001/data',{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(reqbody) 
            })
            .then((res)=>(console.log))
            .catch((err)=>(console.log))
            window.location.reload();

          
        }
        post()
        

      }
  };

  const submit = () =>{

    const reqbody ={
      id: uuidv4(),
      mainText: maintext,
      scheduledTime: newTime,
      importance: Boolean(importance.current.value)
      
    }
    
    const post = async () =>{
      await fetch('http://localhost:3001/data',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqbody) 
        })
        .then((res)=>(console.log))
        .catch((err)=>(console.log))
        window.location.reload();

      
    }
    post()

  }

  
  return (
    <div className='form---wapper'>
      <div className='importancy'>
        <select ref={importance}>
          <option value={true}>중요</option>
          <option value={false}>일반</option>
        </select>
      </div>
      <div className='mainText'>
        <div className='createAt'>
          <input type='time'  value = {newTime} onChange={(e)=>{setTime(e.target.value)}}></input>
        </div>
        <div className='todo_text'>
        <input type='text' value={maintext} onChange={handleInputChange} onKeyUp={handleKeyUp}></input>
        </div>
      </div>
      <div>
        <button className='submit' onClick={submit}> Submit</button>
      </div>
    </div>


  )


}

export default Editform;