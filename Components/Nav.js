import React from 'react'
import Link from 'next/Link'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Button,Form,FormControl} from 'react-bootstrap'
import navStyles from '../styles/Nav.module.css'
 const NavigationBar = () => {
    return (
      <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto" >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="light">Search</Button>
        </Form>
      </Navbar>
    </>
    )
}

export default NavigationBar;