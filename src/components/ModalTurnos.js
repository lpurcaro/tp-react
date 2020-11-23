import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {Alert, Button, Col, Form, Modal} from "react-bootstrap";
import DatePicker from "react-datepicker";

const mapStateToProps = (state) => {
    return {
        pacientes: state.pacientes.pacientes,
        servicios: state.servicios.servicios
    }
}

const ConnectModalTurnos = ({turno, show, onClose, onSubmit, nuevo=false, pacientes, servicios}) => {

    const [nuevoTurno, setNuevoTurno] = useState(turno);
    const [fecha, setFecha] = useState();

    const [showFormError, setShowFormError] = useState(false);
    const action = nuevo ? 'Agregar' : 'Editar';

    useEffect(() => {
        if (!show) {
            setNuevoTurno({});
            setShowFormError(false);
        }
    }, [show]);

    useEffect(() => {
        setNuevoTurno(turno);
    }, [turno]);

    const agregar = () => {
        if (!nuevoTurno.fecha || !nuevoTurno.horario || !nuevoTurno.paciente || !nuevoTurno.servicio) {
            setShowFormError(true);
            return;
        }

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

                    <Form.Group controlId="paciente" onChange={e => setNuevoTurno({...nuevoTurno, paciente: parseInt(e.target.value)})}>
                        <Form.Label>Paciente</Form.Label>
                        <Form.Control as="select" defaultValue={nuevoTurno.paciente.id || null}>
                            { pacientes.map(paciente => <option key={paciente.id} value={paciente.id}>{paciente.nombre}</option>) }
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="servicio" onChange={e => setNuevoTurno({...nuevoTurno, servicio: parseInt(e.target.value)})}>
                        <Form.Label>Servicio</Form.Label>
                        <Form.Control as="select" defaultValue={nuevoTurno.servicio.id || null}>
                            { servicios.map(servicio => <option key={servicio.id} value={servicio.id}>{servicio.nombre}</option>) }
                        </Form.Control>
                    </Form.Group>
                        {/*<Form.Group as={Col} controlId="precio" onChange={e => setNuevoServicio({...nuevoServicio, precio: e.target.value})}>*/}
                        {/*    <Form.Label>Precio</Form.Label>*/}
                        {/*    <Form.Control type="number" defaultValue={nuevoServicio.precio}/>*/}
                        {/*</Form.Group>*/}
                    {/*</Form.Row>*/}

                    {/*<Form.Group controlId="tipo" onChange={e => setNuevoServicio({...nuevoServicio, tipo: e.target.value})}>*/}
                    {/*    <Form.Label>Tipo</Form.Label>*/}
                    {/*    <Form.Control as="select" defaultValue={nuevoServicio.tipo || tipoAtencion[0]}>*/}
                    {/*        { tipoAtencion.map(tipo => <option key={tipo}>{tipo}</option>) }*/}
                    {/*    </Form.Control>*/}
                    {/*</Form.Group>*/}

                    {/*<Form.Group controlId="duracion" onChange={e => setNuevoServicio({...nuevoServicio, duracion: e.target.value})}>*/}
                    {/*    <Form.Label>Duracion</Form.Label>*/}
                    {/*    <Form.Control type="number" defaultValue={nuevoServicio.duracion}/>*/}
                    {/*</Form.Group>*/}
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
