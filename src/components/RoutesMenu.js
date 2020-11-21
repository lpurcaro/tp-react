import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter, Route} from "react-router-dom";

import Turnos from "./Turnos";
import Pacientes from "./Pacientes";
import Servicios from "./Servicios";

const RoutesMenu = () => {
    return <BrowserRouter>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href='/'>Amigos Peludos</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href='/'>
                            Turnos
                        </Nav.Link>
                        <Nav.Link href='/pacientes'>
                            Pacientes
                        </Nav.Link>
                        <Nav.Link href="/servicios">
                            Servicios
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Route exact path='/' component={Turnos}/>
            <Route path='/pacientes' component={Pacientes}/>
            <Route path='/servicios' component={Servicios}/>
        </BrowserRouter>
}

export default RoutesMenu
