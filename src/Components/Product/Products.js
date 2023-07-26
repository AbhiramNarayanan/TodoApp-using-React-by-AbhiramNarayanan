import React,{useState} from 'react'
import {PhonesData} from "./Product.data"
import { Button, Card } from 'react-bootstrap'

const Products = () => {
  const [items,setitems]=useState(PhonesData);
  const incQty=(id)=>{
    const newitem=items.map((item)=>
    item.id===id?{...item,qty:item.qty+1}:item);
    setitems(newitem)
  }
  const decQty=(id)=>{
    const newitem=items.map((item)=>
    item.id===id&&item.qty>1 ?{...item, qty:item.qty-1}:item);
    setitems(newitem)
  }



  return (
    <div>
      {items.map((item)=>(
      <div className="d-inline-flex"  style={{textAlign:"center"}} key={item.id}>
      <Card className="shadow p-3 m-2 bg-body-tertiary rounded" style={{ width: '13rem' }}>
      <Card.Img className="p-2" style={{height:"15rem"}}variant="top" src={require(`./assets/${item.image}.jpg`)}/>
      <Card.Body>
        <Card.Title className="text-primary" style={{textAlign:"center"}}>{item.model}</Card.Title>
        <Card.Text>
        {item.desc}
        </Card.Text>
        <h3>Price : {item.Price}</h3>
        <div>
          <p>
            Qty:
            <Button onClick={()=>incQty(item.id)}className="m-2">+</Button>
            {item.qty}
            <Button onClick={()=>decQty(item.id)}className="m-2">-</Button>
            
          </p>
        </div>

        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>
      )
    )}
     
      
      
      
    </div>
  )
}

export default Products