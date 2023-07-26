import React from 'react'
import Headercss from "./Header.module.css"
import btncss from "./Button.module.css"

const Header = () => {
  const clickHandle=()=>{
    console.log("You clicked Login");
  }
  const dbClickHandle=()=>{
    console.log("You clicked Component 1");
  }
  const onChangeHandle=(name)=>{
    alert ("Hello"+ name);
  }
  const mouseHandle =(name)=>{
    alert ("Whta's up");
  }
  const onKeyHandle =(name)=>{
    alert ("Hyy");
  }
  return (
    <div className={Headercss.header}>
        <h1 onDoubleClick={dbClickHandle} style={{color:"red"}}>Component 1</h1>
        <button onClick={clickHandle} type="button" className={btncss.loginBtn}>Log In</button>

        <button type="button" onMouseOver={mouseHandle} className={btncss.logoutBtn}>Log Out</button>
        <input type="text" onChange={()=>onChangeHandle(" Abhiram")}/>
        <input type="text" onKeyDown={onKeyHandle} className="m-2"/>

    </div>
  )
}

export default Header