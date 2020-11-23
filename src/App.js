import React from 'react';
import './App.css';

import {Container, Nav, Navbar, Badge} from "react-bootstrap";
import {Route} from "react-router";
import Turnos from "./components/Turnos";
import Pacientes from "./components/Pacientes";
import Servicios from "./components/Servicios";
import {BrowserRouter, Link} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href='/'>Amigos Peludos</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Badge>
                <Link to='/'>
                  Turnos
                </Link>
              </Badge>
              <Badge>
                <Link to='/pacientes'>
                  Pacientes
                </Link>
              </Badge>
              <Badge>
                <Link to='/servicios'>
                  Servicios
                </Link>
              </Badge>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container className={'mt-lg'}>
          <Route exact path='/' component={Turnos}/>
          <Route path='/pacientes' component={Pacientes}/>
          <Route path='/servicios' component={Servicios}/>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
