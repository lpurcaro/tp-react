import React, {useEffect, useState} from 'react';
import {Alert, Button, Col, Form, Modal} from "react-bootstrap";
import {connect} from "react-redux";

const ModalTurnos = ({turno, show, onClose, onSubmit, nuevo=false}) => {

    const [nuevoTurno, setNuevoTurno] = useState(turno);

    const [showFormError, setShowFormError] = useState(false);
    const action = nuevo ? 'Agregar' : 'Editar';

    useEffect(() => {
        if (!show) {
            setNuevoTurno({})
        }
    }, [show]);

    useEffect(() => {
        setNuevoTurno(turno);
    }, [turno]);

    const agregar = () => {
        if (!nuevoTurno.nombre || !nuevoTurno.precio || !nuevoTurno.tipo || !nuevoTurno.duracion) {
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

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title> { action } servicio</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Alert variant='danger' hidden={!showFormError}>
                    Todos los campos son obligatorios
                </Alert>
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

export default ModalTurnos
