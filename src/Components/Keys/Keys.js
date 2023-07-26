import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const products=[{id:1, name:"Laptop", brand:"Dell", qty:1},
{id:2, name:"Laptop", brand:"Lenovo", qty:1},
{id:3, name:"Laptop", brand:"Asus", qty:1}];

const Keys = () => {
  

  const [items,setitem]=useState(products);
  const changeQty=(id)=>{
    const newitem =items.map((item)=>
    item.id === id?{...item, qty:item.qty+1}:item);
    setitem(newitem)
  }
 
  return (
      
       <div>
         {items.map((product)=>(
            <div className="bg-info m-2" style={{textAlign:"center"}} key={product.id}>
                <h1>{product.name}</h1>
                <h2>Brand : {product.brand}</h2>
                <h3>qty:{product.qty}</h3>
               
                <Button onClick={()=>changeQty(product.id)} >+</Button>
                
                
            </div>
            

        ))}
       </div>
       

  )
}

export default Keys