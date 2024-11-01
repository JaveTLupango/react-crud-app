import React  from 'react';
import { Button, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';




const onFormSubmit = e => {    
  console.log(e.target.lastname.value);
  debugger;
  alert(e);
}

export default function AddStudent() {
    return(
      <Container>
          <h1> Add Student</h1>
          <Row>
            <Col>
              <Form onSubmit={onFormSubmit}>                
                  <Form.Group className="mb-3" controlId="formGroupLN">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name='lastname' placeholder="Enter Last Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupFN">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name='firstname'  placeholder="Enter First Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupMN">
                    <Form.Label>Middle Name</Form.Label>
                    <Form.Control type="text" name='middlename' placeholder="Enter Middle Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupGL">
                    <Form.Label>Grade level</Form.Label>
                    <Form.Control type="text" name='gradelevel' placeholder="Enter Grade Level" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupContact">
                    <Form.Label>Contact No</Form.Label>
                    <Form.Control type="number" name='contact' placeholder="Enter Contact No." />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Button type="submit" variant="outline-primary">Submit</Button>
                  </Form.Group> 
              </Form>   
            </Col>             
            <Col>
            </Col>
          </Row> 
      </Container>
    );   
  }
