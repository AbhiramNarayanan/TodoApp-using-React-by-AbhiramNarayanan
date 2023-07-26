import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import States from "./Components/States";
import {Button, Container} from "react-bootstrap";
import CheckNumber from "./Components/CheckNumber";
import Main from './Components/Conditional/Main';
import Keys from './Components/Keys/Keys';
import Products from "./Components/Product/Products"
import Effects from "./Components/Effects/Effects"
import MainRouter from "./Components/ReactRouter/MainRouter"
import Todo from "./Components/Todoapp/Todo"

function App() {
  const newStates=[{name:"Karnataka", language:"Kannada", population:"5000"},
  {name:"Karnataka", language:"Kannada", population:"5000"}]
  let number=-2;
  let isloggedin=true;
  

 

  
 
  

return (
    <div>
      <h1 style={{textAlign:"center"}}>React Complete Tutorial by Abhiram</h1>
      
      <Header/>
      <Home/>
      <Container>
      
      <States newStates={newStates}/>
      <CheckNumber Number={0}/>
      {number >0? <h1>Positive</h1>: number<0?<h1>Negative</h1>:<h1>Zero</h1>}
      {isloggedin?<h1>Welcome to my Website</h1> :<h1>Please Login</h1>}
      <Main isloggedin={false}/>

      
      </Container>
     <Keys/>
     <container>
     <Products/>
     </container>
     <Effects/>
     <MainRouter/>
     <Todo/>
     
    
      
    </div>
   
    
  );
}

export default App;
