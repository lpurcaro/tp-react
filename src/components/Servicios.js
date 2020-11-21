import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Agregar from './Agregar';
import ListaServicios from './ListaServicios';

const Servicios = () => {
    return (
        <div>
            <div>
                <Row>
                    <Col><h2>Servicios disponibles</h2></Col>
                    <Col className={'btn-column'}><Agregar tipo={'servicio'}/></Col>
                </Row>
            </div>
            <div className={'mt-md'}>
                <ListaServicios/>
            </div>
        </div>
    )
}

export default Servicios
