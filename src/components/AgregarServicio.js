import React, {useState} from 'react';
import {Button, Col, Form, Modal, Alert} from 'react-bootstrap';
import {connect} from "react-redux";
import {agregarServicio} from '../store/actions';
import ModalServicios from "./ModalServicios";

const mapDispatchToProps = (dispatch) => {
    return {
        agregarServicio: (servicio) => dispatch(agregarServicio(servicio))
    }
};

const ConnectAgregarServicio = ({agregarServicio}) => {

    const [showAgregarServicio, setShowAgregarServicio] = useState(false);

    const toggleAgregarServicio = () => {
        setShowAgregarServicio(!showAgregarServicio);
    };

    const servicio = {
        nombre: '',
        precio: '',
        tipo: '',
        duracion: ''
    };

    return <>
        <Button variant="outline-primary" onClick={toggleAgregarServicio}>Agregar Servicio</Button>
        <ModalServicios servicio={servicio} onSubmit={agregarServicio} onClose={toggleAgregarServicio} show={showAgregarServicio} nuevo={true}/>
    </>
};

const AgregarServicio = connect(null, mapDispatchToProps)(ConnectAgregarServicio);

export default AgregarServicio
