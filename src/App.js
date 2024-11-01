import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Student from "./Pages/ListOfStudent";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import AddStudent from './Pages/AddStudent';



function App() {
  return (
    <BrowserRouter>

    <header>
         

    <Navbar navbar navbar-inverse navbar-dark bg-dark>
      <Container container-fluid>
        <div navbar-header>
          <a navbar-brand href="/">Student Portal</a>
        </div>
        <Nav
            className="my-2 my-lg-0 navbar-nav"
            style={{ maxHeight: '100px'}}
            navbarScroll  
          >

          <Nav.Link  nav-item nav-link href="/">Home</Nav.Link>
          <Nav.Link  nav-item nav-link href="student">Student</Nav.Link> 
          </Nav>
        
       </Container>
  </Navbar>
  
  </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/about" element={<About />} />
          <Route path="/add" element={<AddStudent />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
