import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Col, Row} from "react-bootstrap";
import AgregarTurno from "./AgregarTurno";
import ListaTurnos from "./ListaTurnos";
import {editarTurno, eliminarTurno} from "../store/actions";
import ModalTurnos from "./ModalTurnos";

const mapStateToProps = (state) => {
    return {
        turnos: state.turnos.turnos,
        pacientes: state.pacientes.pacientes,
        servicios: state.servicios.servicios
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        eliminar: id => dispatch(eliminarTurno({id})),
        editar: servicio => dispatch(editarTurno(servicio))
    }
};

const ConnectTurnos = ({turnos, pacientes, servicios, eliminar, editar}) => {

    const [fecha, setFecha] = useState(new Date());
    const [turnosFullData, setTurnosFullData] = useState([]);
    const [turnosFiltrados, setTurnosFiltrados] = useState([]);

    useEffect(() => {
        const turnosFullData = turnos.map(turno => {
            const paciente = pacientes.find(paciente => paciente.id === turno.paciente);
            const servicio = servicios.find(servicio => servicio.id === turno.servicio);
            return {...turno, paciente, servicio}
        });

        setTurnosFullData(turnosFullData);
    }, [turnos, pacientes, servicios]);

    useEffect(() => {
        const fechaFormateada = `${fecha.getUTCDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
        const turnosPorFecha = turnosFullData.filter(turno => turno.fecha === fechaFormateada);
        setTurnosFiltrados(turnosPorFecha);
    }, [fecha, turnosFullData]);


    return (
        <>
            <div>
                <Row>
                    <Col><h2>Turnos del dia</h2></Col>
                    <Col className={'btn-column'}><AgregarTurno/></Col>
                </Row>
            </div>
            <div className={'mt-sm'}>
                <p className={'d-inline'}>Fecha seleccionada: </p>
                <DatePicker
                    className={'d-inline'}
                    dateFormat="dd/MM/yyyy"
                    selected={fecha}
                    onChange={date => setFecha(date)} />
            </div>
            <div className={'mt-sm'}>
                <ListaTurnos turnos={turnosFiltrados} editar={editar} eliminar={eliminar}/>
            </div>
            {/*<ModalTurnos servicio={turno} onSubmit={agregarTurno} onClose={toggleAgregarTurno} show={showAgregarTurno} nuevo={true}/>*/}
        </>
    );
};

const Turnos = connect(mapStateToProps, mapDispatchToProps)(ConnectTurnos);

export default Turnos
