import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Col, Row} from "react-bootstrap";
import AgregarTurno from "./AgregarTurno";
import ListaTurnos from "./ListaTurnos";
import {editarTurno, eliminarTurno} from "../store/actions";
import ModalTurnos from "./ModalTurnos";
import ModalEliminar from "./ModalEliminar";

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
        editar: turno => dispatch(editarTurno(turno))
    }
};

const ConnectTurnos = ({turnos, pacientes, servicios, eliminar, editar}) => {

    const [fecha, setFecha] = useState(new Date());
    const [turnosFullData, setTurnosFullData] = useState([]);
    const [turnosFiltrados, setTurnosFiltrados] = useState([]);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [turnoAEliminar, setTurnoAEliminar] = useState();

    const [turnoAEditar, setTurnoAEditar] = useState({paciente: 0, servicio: 0, fecha: '', horario: ''});
    const [showEditarTurno, setShowEditarTurno] = useState(false);

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
        turnosPorFecha.sort(ordenarPorHorario);
        setTurnosFiltrados(turnosPorFecha);
    }, [fecha, turnosFullData]);

    const ordenarPorHorario = (t1, t2) => {
        const h1 = t1.horario.split(':');
        const h2 = t2.horario.split(':');

        if (h1[0] === h2[0]) {
            return h1[1] > h2[1] ? 1 : -1;
        }

        return h1[0] > h2[0] ? 1 : -1;
    };

    const toggleShowDeleteModal = (id) => {
        setTurnoAEliminar(id);
        setShowDeleteModal(true);
    };

    const eliminarTurno = () => {
        eliminar(turnoAEliminar);
        setShowDeleteModal(false);
    };

    const toggleEditarTurno = (id) => {
        setTurnoAEditar(turnosFullData.find(turno => turno.id === id));
        setShowEditarTurno(true);
    };

    const editarTurno = (data) => {
        editar(data);
    };

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
                <ListaTurnos turnos={turnosFiltrados} editar={toggleEditarTurno} eliminar={toggleShowDeleteModal}/>
                <ModalTurnos turno={turnoAEditar} onSubmit={editarTurno} onClose={() => setShowEditarTurno(false)} show={showEditarTurno}/>
                <ModalEliminar show={showDeleteModal} close={() => setShowDeleteModal(false)} eliminar={eliminarTurno} tipo={'turno'}/>
            </div>
        </>
    );
};

const Turnos = connect(mapStateToProps, mapDispatchToProps)(ConnectTurnos);

export default Turnos
