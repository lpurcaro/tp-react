import React from 'react';
import { Accordion, Card, Button, ListGroup, ButtonGroup, Row, Col } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';

const DetallePaciente = ({paciente, editar}) => {
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey={paciente.id}>
                <Row>
                    <Col>{paciente.nombre}</Col>
                    <Col className={'btn-column'}>
                        <ButtonGroup size="sm">
                            <Button onClick={() => editar(paciente.id)}><Pencil/></Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={paciente.id}>
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item><b>Dueño:</b> {paciente.dueno}</ListGroup.Item>
                        <ListGroup.Item><b>Fecha de Nacimiento:</b> {paciente.fechaNac}</ListGroup.Item>
                        <ListGroup.Item><b>Teléfono:</b> {paciente.telefono}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default DetallePaciente

