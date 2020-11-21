import React from 'react';
import { Accordion, Card, Button, ListGroup, ButtonGroup, Row, Col } from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';

const DetalleServicio = ({servicio, editar, eliminar}) => {
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey={servicio.id}>
                <Row>
                    <Col>{servicio.nombre}</Col>
                    <Col className={'btn-column'}>
                        <ButtonGroup size="sm">
                            <Button onClick={() => editar(servicio.id)}><Pencil/></Button>
                            <Button onClick={() => eliminar(servicio.id)}><Trash/></Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Accordion.Toggle>
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

export default DetalleServicio

