import React  from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaPlus } from "react-icons/fa";
import {Link}  from "react-router-dom";

export default function ListOfStudent() {
    return(
      <Container>
          <h1> List of Student</h1>
          <Link class="btn btn-primary" to='/add' variant="outline-primary" style={{ float: 'right' }}
          ><FaPlus /></Link>
          <Table striped bordered hover table-dark>
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>Last Name</th>
                  <th>First Name</th>
                  <th>Middle Name</th>
                  <th>Level</th>
                  <th>Contact No.</th> 
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>                
              </tbody>
            </Table>
      </Container>
    );
  }
