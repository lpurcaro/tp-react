import React from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap';
import Agregar from './Agregar';
import ListaServicios from './ListaServicios';

const mapStateToProps = (state) => {
    return {
        listaServicios: state.servicios,
    }
};

const ConnectServicios = ({listaServicios}) => {
    return (
        <div>
            <div>
                <Row>
                    <Col><h2>Servicios disponibles</h2></Col>
                    <Col className={'btn-column'}><Agregar tipo={'servicio'}/></Col>
                </Row>
            </div>
            <ListaServicios/>
        </div>
    )
}

const Servicios = connect(mapStateToProps)(ConnectServicios)

export default Servicios
