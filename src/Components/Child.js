import React from 'react'
import Childcss from "./Child.module.css";

const Child = () => {
  return (
    <div className={Childcss.Childstyle}>
        <h3 style={{color:"red"}}>Child Component</h3>
    </div>
  )
}

export default Child