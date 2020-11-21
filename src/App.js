import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import Turnos from './components/Turnos';
import Pacientes from './components/Pacientes';
import Servicios from './components/Servicios';
import RoutesMenu from './components/RoutesMenu';
import {Nav, Navbar} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <RoutesMenu/>
    </div>
  );
}

export default App;
