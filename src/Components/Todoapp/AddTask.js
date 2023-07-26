import React,{useState} from 'react'


const AddTask = ({addTask}) => {
    const[value,setvalue]=useState("");
    const additem=()=>{
        addTask(value);
        setvalue("");
    }
  return (
    <div className="input-container">
        <input onChange={(e)=>{
            setvalue(e.target.value) }} type="text" className="input" placeholder="Add a new Task" value={value}/>
        <button onClick={additem}className="add-btn">Add</button>
    

    </div>
  )
}

export default AddTask