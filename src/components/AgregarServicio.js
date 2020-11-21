import React, {useState} from 'react';
import {Button, Col, Form, Modal, Alert} from 'react-bootstrap';
import {connect} from "react-redux";
import {agregarServicio} from '../store/actions';

const mapStateToProps = (state) => {
    return {
        tipoAtencion: state.servicios.tipoAtencion
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        agregarServicio: (servicio) => dispatch(agregarServicio(servicio))
    }
}

const ConnectAgregarServicio = ({tipoAtencion, agregarServicio}) => {

    const [showAgregarServicio, setShowAgregarServicio] = useState(false);
    const [showFormError, setShowFormError] = useState(false);

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);
    const [tipo, setTipo] = useState('');
    const [duracion, setDuracion] = useState(0);

    const resetData = () => {
        setNombre('');
        setPrecio(0);
        setTipo('');
        setDuracion(0);
    };

    const toggleAgregarServicio = () => {
        if (showFormError) setShowFormError(false);
        if (!showAgregarServicio) resetData();
        setShowAgregarServicio(!showAgregarServicio);
    };

    const agregar = () => {
        if (!nombre || !precio || !tipo || !duracion) {
            setShowFormError(true);
            return;
        }

        agregarServicio({
            nombre,
            precio,
            tipo,
            duracion
        });

        setShowFormError(false);
        toggleAgregarServicio();
    };

    return <>
        <Button variant="outline-primary" onClick={toggleAgregarServicio}>Agregar Servicio</Button>
        <Modal show={showAgregarServicio} onHide={toggleAgregarServicio}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar nuevo servicio</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Alert variant='danger' hidden={!showFormError}>
                    Todos los campos son obligatorios
                </Alert>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="nombre" value={nombre} onChange={e => setNombre(e.target.value)}>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre del nuevo servicio" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="precio" value={precio} onChange={e => setPrecio(e.target.value)}>
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="number" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="tipo" value={tipo} onChange={e => setTipo(e.target.value)}>
                        <Form.Label>Tipo</Form.Label>
                        <Form.Control as="select" defaultValue={tipoAtencion[0]}>
                            { tipoAtencion.map(tipo => <option key={tipo}>{tipo}</option>) }
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="duracion" value={duracion} onChange={e => setDuracion(e.target.value)}>
                        <Form.Label>Durtacion</Form.Label>
                        <Form.Control type="number"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={toggleAgregarServicio}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={agregar}>
                    Agregar
                </Button>
            </Modal.Footer>
        </Modal>
    </>
};

const AgregarServicio = connect(mapStateToProps, mapDispatchToProps)(ConnectAgregarServicio);

export default AgregarServicio
