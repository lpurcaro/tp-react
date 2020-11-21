import React from 'react';
import { connect } from 'react-redux'
import { Accordion } from 'react-bootstrap';
import DetalleServicio from './DetalleServicio';

const mapStateToProps = (state) => {
    return {
        listaServicios: state.servicios.servicios,
    }
};

const ConnectListaServicios = ({listaServicios}) => {
    return (
        <Accordion>
            {listaServicios.map(servicio => <DetalleServicio servicio={servicio} key={servicio.id}/>)}
        </Accordion>
    )
}

const ListaServicios = connect(mapStateToProps)(ConnectListaServicios)

export default ListaServicios
