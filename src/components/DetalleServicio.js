import React from 'react';
import { connect } from 'react-redux'
import { Accordion, Card, Button, ListGroup } from 'react-bootstrap';

const mapStateToProps = (state) => {
    return {
        eliminar: state.servicios,
        editar: state.servicios
    }
};

const ConnectDetalleServicio = ({servicio, editar, eliminar}) => {
    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={servicio.id}>
                    {servicio.nombre}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={servicio.id}>
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item><b>Precio:</b> ${servicio.precio}</ListGroup.Item>
                        <ListGroup.Item><b>Duración:</b> {servicio.duracion} minutos</ListGroup.Item>
                        <ListGroup.Item><b>Tipo:</b> {servicio.tipo}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

const DetalleServicio = connect(mapStateToProps)(ConnectDetalleServicio)

export default DetalleServicio

