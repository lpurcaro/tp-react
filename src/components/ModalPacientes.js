import React, {useEffect, useState} from 'react';
import {Alert, Button, Col, Form, Modal} from "react-bootstrap";
import {connect} from "react-redux";
import DatePicker from "react-datepicker";


const ModalPacientes = ({paciente, show, onClose, onSubmit, nuevo=false}) => {

    const [nuevoPaciente, setNuevoPaciente] = useState(paciente);
    const [showFormError, setShowFormError] = useState(false);
    const [fecha, setFecha] = useState();
    const action = nuevo ? 'Agregar' : 'Editar';

    // useEffect(() => {
    //     if (!show) {
    //         setNuevoServicio({})
    //     }
    // }, [show]);
    //
    // useEffect(() => {
    //     setNuevoServicio(servicio);
    // }, [servicio]);

    const agregar = () => {
        if (!nuevoPaciente.nombre || !nuevoPaciente.dueno || !nuevoPaciente.fechaNac || !nuevoPaciente.telefono) {
            setShowFormError(true);
            return;
        }

        onSubmit({
            id: paciente.id,
            ...nuevoPaciente
        });

        onClose();
        setShowFormError(false);
    };

    const setFechaNac = (date) => {
        setFecha(date);
        const fechaNac = `${date.getUTCDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        setNuevoPaciente({...nuevoPaciente, fechaNac});
    };

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title> { action } paciente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Alert variant='danger' hidden={!showFormError}>
                    Todos los campos son obligatorios
                </Alert>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="nombre" onChange={e => setNuevoPaciente({...nuevoPaciente, nombre: e.target.value})}>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" defaultValue={nuevoPaciente.nombre}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="dueno" onChange={e => setNuevoPaciente({...nuevoPaciente, dueno: e.target.value})}>
                            <Form.Label>Dueño</Form.Label>
                            <Form.Control type="text" defaultValue={nuevoPaciente.dueno}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="telefono" onChange={e => setNuevoPaciente({...nuevoPaciente, telefono: e.target.value})}>
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" defaultValue={nuevoPaciente.telefono}/>
                    </Form.Group>

                    <Form.Group controlId="fechaNac">
                        <Form.Label>Fecha de nacimiento</Form.Label>
                        <DatePicker
                            className={'d-inline'}
                            dateFormat="dd/MM/yyyy"
                            selected={fecha}
                            onChange={setFechaNac} />
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

export default ModalPacientes
