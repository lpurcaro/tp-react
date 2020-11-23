import React, {useEffect, useState} from 'react';
import {Alert, Button, Col, Form, Modal} from "react-bootstrap";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        tipoAtencion: state.servicios.tipoAtencion
    }
};

const ConnectModalServicios = ({servicio, show, onClose, onSubmit, nuevo=false, tipoAtencion}) => {

    const [nuevoServicio, setNuevoServicio] = useState(servicio);

    const [showFormError, setShowFormError] = useState(false);
    const action = nuevo ? 'Agregar' : 'Editar';

    useEffect(() => {
        if (!show) {
            setNuevoServicio({})
        }
    }, [show]);

    useEffect(() => {
        setNuevoServicio(servicio);
    }, [servicio]);

    const agregar = () => {
        if (!nuevoServicio.nombre || !nuevoServicio.precio || !nuevoServicio.tipo || !nuevoServicio.duracion) {
            setShowFormError(true);
            return;
        }

        onSubmit({
            id: servicio.id,
            ...nuevoServicio
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
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="nombre" onChange={e => setNuevoServicio({...nuevoServicio, nombre: e.target.value})}>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" defaultValue={nuevoServicio.nombre}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="precio" onChange={e => setNuevoServicio({...nuevoServicio, precio: e.target.value})}>
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="number" defaultValue={nuevoServicio.precio}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="tipo" onChange={e => setNuevoServicio({...nuevoServicio, tipo: e.target.value})}>
                        <Form.Label>Tipo</Form.Label>
                        <Form.Control as="select" defaultValue={nuevoServicio.tipo || tipoAtencion[0]}>
                            { tipoAtencion.map(tipo => <option key={tipo}>{tipo}</option>) }
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="duracion" onChange={e => setNuevoServicio({...nuevoServicio, duracion: e.target.value})}>
                        <Form.Label>Duracion</Form.Label>
                        <Form.Control type="number" defaultValue={nuevoServicio.duracion}/>
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

const ModalServicios = connect(mapStateToProps)(ConnectModalServicios);

export default ModalServicios
