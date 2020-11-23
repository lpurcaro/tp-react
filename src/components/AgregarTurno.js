import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from "react-redux";
import {agregarServicio} from '../store/actions';
import ModalTurnos from "./ModalTurnos";

const mapDispatchToProps = (dispatch) => {
    return {
        agregarServicio: (servicio) => dispatch(agregarServicio(servicio))
    }
};

const ConnectAgregarTurno = ({agregarServicio}) => {

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
        <Button variant="outline-primary" onClick={toggleAgregarServicio}>Agregar Turno</Button>
        <ModalTurnos servicio={servicio} onSubmit={agregarServicio} onClose={toggleAgregarServicio} show={showAgregarServicio} nuevo={true}/>
    </>
};

const AgregarTurno = connect(null, mapDispatchToProps)(ConnectAgregarTurno);

export default AgregarTurno
