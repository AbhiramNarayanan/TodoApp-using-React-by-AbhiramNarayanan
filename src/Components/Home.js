import React,{ useState } from 'react';
import Child from "./Child";
import Homecss from "./Home.module.css";
import { Button, Table, Accordion, Card, Navbar, Nav, Container } from "react-bootstrap";


const Home = () => {
    const homestyle={color:"blue"};
    const [colour,setcolour]=useState("Red");
    const changeColour=()=>{
      setcolour("Green");
    }
    const [counter,setcounter]=useState(0);
    const incQty=()=>{
      setcounter(counter+1);
    }
    const decQty=()=>{
     setcounter(counter-1);
      
    }
  return (
    <div>
      <Container>
        <h1 style={homestyle} className={Homecss.header}>Home Component</h1>
        <Child/>
        <Button variant="primary">Primary</Button>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/200/300" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h1>My favourite Colour is {colour}</h1>
      <Button onClick={changeColour}>Change Colour</Button>
      <h1>Counter is {counter}</h1>
      <Button onClick={incQty} className="m-2">+</Button>
      <Button onClick={decQty}className="m-2">-</Button>
      </Container>


      
     </div>
  )
}

export default Home