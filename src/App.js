
import './App.css';
import Editform from './Editform';
import './Editform.css'
import { useEffect, useState, useRef } from "react";
///예약된시간, 메인텍스트 ,중요도,해제하는상태
import hugme from './hugme.gif'
import Todos from './Todos';
import './Todos.css';

function App() {

  const [data,setData] = useState([]);  
  const [newValue,setValue] = useState('');
  
  useEffect(()=>{
    const getdata = async() =>{
      await fetch('http://localhost:3001/data',{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res)=>res.json())
      .then((data)=>setData(data))
    }
    getdata()

  },[])
  
  
  return (
    <div>
      <div className="App">
        <div className='logo'>
          <h1>TO-DO LIST</h1>
          <div className='hug'>
            <img src={hugme}></img>
          </div>
        </div>
      </div>
    <Editform setValue={setValue}/>
    <Todos data={data} setData={setData}/>
    </div>

  );
}

export default App;
