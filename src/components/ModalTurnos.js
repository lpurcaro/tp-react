import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {Alert, Button, Col, Form, Modal} from "react-bootstrap";
import DatePicker from "react-datepicker";

const mapStateToProps = (state) => {
    return {
        pacientes: state.pacientes.pacientes,
        servicios: state.servicios.servicios
    }
};

const ConnectModalTurnos = ({turno, show, onClose, onSubmit, nuevo=false, pacientes, servicios}) => {

    const [nuevoTurno, setNuevoTurno] = useState(new Date());
    const [fecha, setFecha] = useState();

    const [showFormError, setShowFormError] = useState(false);
    const action = nuevo ? 'Agregar' : 'Editar';

    useEffect(() => {
        if (!show) {
            // setNuevoTurno({});
            setFecha(null);
            setShowFormError(false);
        }
    }, [show]);

    useEffect(() => {
        const [hora, minuto] = turno?.horario?.split(':')?.map(h => parseInt(h));
        const [dia, mes, ano] = turno?.fecha?.split('/')?.map(f => parseInt(f));
        const date = new Date(ano, mes - 1, dia, hora, minuto);

        if (date.toString() !== 'Invalid Date') {
            setFecha(date);
        }

        setNuevoTurno({
            ...turno,
            paciente: turno.paciente?.id?.toString(),
            servicio: turno.servicio?.id?.toString()
        });
    }, [turno]);

    const agregar = () => {

        if (!nuevoTurno.fecha || !nuevoTurno.horario || !nuevoTurno.paciente || !nuevoTurno.servicio) {
            setShowFormError(true);
            return;
        }

        nuevoTurno.paciente = parseInt(nuevoTurno.paciente);
        nuevoTurno.servicio = parseInt(nuevoTurno.servicio);

        onSubmit({
            id: turno.id,
            ...nuevoTurno
        });

        onClose();
        setShowFormError(false);
    };

    const isWeekday = date => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };

    const seleccionarFecha = (date) => {
        const fecha = `${date.getUTCDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        const horario = `${date.getHours()}:${date.getMinutes() || '00'}`;
        setFecha(date);
        setNuevoTurno({...nuevoTurno, fecha, horario})
    };

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title> { action } turno</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Alert variant='danger' hidden={!showFormError}>
                    Todos los campos son obligatorios
                </Alert>
                <Form>
                    <Form.Group>
                        <Form.Label>Fecha </Form.Label>
                        <DatePicker
                            minDate={new Date()}
                            showTimeSelect
                            selected={fecha}
                            onChange={seleccionarFecha}
                            filterDate={isWeekday}
                            dateFormat="dd/MM/yyyy HH:mm"
                        />
                    </Form.Group>

                    <Form.Group controlId="paciente" onChange={e => setNuevoTurno({...nuevoTurno, paciente: e.target.value})}>
                        <Form.Label>Paciente</Form.Label>
                        <Form.Control as="select" defaultValue={turno?.paciente?.id?.toString() || '0'}>
                            <option>Selecciona un paciente...</option>
                            { pacientes.map(paciente => <option key={paciente.nombre} value={paciente.id}>{paciente.nombre}</option>) }
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="servicio" onChange={e => setNuevoTurno({...nuevoTurno, servicio: parseInt(e.target.value)})}>
                        <Form.Label>Servicio</Form.Label>
                        <Form.Control as="select" defaultValue={turno?.servicio?.id?.toString() || '0'}>
                            <option>Selecciona un servicio...</option>
                            { servicios.map(servicio => <option key={servicio.id} value={servicio.id}>{servicio.nombre}</option>) }
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={agregar}>
                    { action }
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

const ModalTurnos = connect(mapStateToProps)(ConnectModalTurnos);

export default ModalTurnos
