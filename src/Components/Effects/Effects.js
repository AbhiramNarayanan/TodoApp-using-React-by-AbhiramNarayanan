import React,{useState, useEffect} from 'react'
import { Button } from 'react-bootstrap';

const Effects = () => {
    const [counter,setcounter]=useState(0);
    const [counter1,setcounter1]=useState(0);
    useEffect(()=>{
        console.log("Side Effects");
    },[counter])
    const [posts,setposts]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(posts => setposts(posts.splice(0,10)))
    })
  return (
    <div>
        <h1>use Effect</h1>
        <h1>{counter}</h1>
        <Button onClick={()=>setcounter(counter+1)}>+</Button>
        <h1>{counter1}</h1>
        <Button onClick={()=>setcounter1(counter1+1)}>+</Button>
        <div>
            {posts.map((post)=>(
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Effects