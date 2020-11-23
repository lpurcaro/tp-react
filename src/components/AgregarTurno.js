import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from "react-redux";
import {agregarTurno} from '../store/actions';
import ModalTurnos from "./ModalTurnos";

const mapDispatchToProps = (dispatch) => {
    return {
        agregarTurno: (servicio) => dispatch(agregarTurno(servicio))
    }
};

const ConnectAgregarTurno = ({agregarTurno}) => {

    const [showAgregarTurno, setShowAgregarTurno] = useState(false);

    const toggleAgregarTurno = () => {
        setShowAgregarTurno(!showAgregarTurno);
    };

    const turno = {
        fecha: '',
        horario: '',
        paciente: 0,
        servicio: 0
    };

    return <>
        <Button variant="outline-primary" onClick={toggleAgregarTurno}>Agregar Turno</Button>
        <ModalTurnos turno={turno} onSubmit={agregarTurno} onClose={toggleAgregarTurno} show={showAgregarTurno} nuevo={true}/>
    </>
};

const AgregarTurno = connect(null, mapDispatchToProps)(ConnectAgregarTurno);

export default AgregarTurno
