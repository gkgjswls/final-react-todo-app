import { useState} from 'react';
import { useRef } from 'react';
const Edit = ({setEditMode,isEditMode,todo,data}) =>{

  const InputChangeRef = useRef(null)
  
  const handleForm = (e) =>{
      e.preventDefault()

      const reqbody = data.filter((el)=> el.id === todo.id)[0];
      reqbody.mainText = InputChangeRef.current.value;

      const update = async () =>{
        await fetch('http://localhost:3001/data',{
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reqbody) 
          })
          .then((res)=>(console.log))
          .catch((err)=>(console.log))
        
      }


    setEditMode(!isEditMode)

  }


  return (
    <>
    <form onSubmit={handleForm}>
      <div>
        <input ref={InputChangeRef} required></input>
        <button>수정</button>
      </div>


    </form>
    
    </>


  )


}

export default Edit;