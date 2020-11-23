import React from 'react';
import { Accordion, Card, Button, ListGroup, ButtonGroup, Row, Col } from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';

const DetalleTurno = ({turno, editar, eliminar}) => {
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey={turno.id}>
                <Row>
                    <Col>{turno.horario} - {turno.paciente.nombre}</Col>
                    <Col className={'btn-column'}>
                        <ButtonGroup size="sm">
                            <Button onClick={() => editar(turno.id)}><Pencil/></Button>
                            <Button onClick={() => eliminar(turno.id)}><Trash/></Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={turno.id}>
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item><b>Servicio:</b> {turno.servicio.nombre}</ListGroup.Item>
                        <ListGroup.Item><b>Precio:</b> ${turno.servicio.precio}</ListGroup.Item>
                        <ListGroup.Item><b>Duración:</b> {turno.servicio.duracion} minutos</ListGroup.Item>
                        <ListGroup.Item><b>Nro de Contacto:</b> {turno.paciente.telefono}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
};

export default DetalleTurno

