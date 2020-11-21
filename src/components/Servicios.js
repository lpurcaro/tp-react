import React, {useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import {connect} from 'react-redux';
import AgregarServicio from './AgregarServicio';
import ListaServicios from './ListaServicios';
import ModalEditarServicio from "./ModalEditarServicio";
import ModalEliminar from './ModalEliminar';
import {editarServicio, eliminarServicio} from "../store/actions";

const mapStateToProps = (state) => {
    return {
        listaServicios: state.servicios.servicios,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        eliminar: id => dispatch(eliminarServicio({id})),
        editar: servicio => dispatch(editarServicio({servicio}))
    }
};

const ConnectServicios = ({listaServicios, eliminar, editar}) => {

    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [editarServicio, setEditarServicio] = useState();
    const [servicioAEliminar, setServicioAEliminar] = useState();

    const toggleShowEditModal = (id) => {
        setEditarServicio(listaServicios.find(servicio => servicio.id === id));
        setShowEditModal(true);
    };

    const toggleShowDeleteModal = (id) => {
        setServicioAEliminar(id);
        setShowDeleteModal(true);
    };

    const eliminarServicio = () => {
        eliminar(servicioAEliminar);
        setShowDeleteModal(false);
    }

    return (
        <div>
            <div>
                <Row>
                    <Col><h2>Servicios disponibles</h2></Col>
                    <Col className={'btn-column'}><AgregarServicio tipo={'servicio'}/></Col>
                </Row>
            </div>
            <div className={'mt-md'}>
                <ListaServicios servicios={listaServicios} editar={toggleShowEditModal} eliminar={toggleShowDeleteModal}/>
                <ModalEditarServicio show={showEditModal} close={() => setShowEditModal(false)} confirmar={editar} servicio={editarServicio}/>
                <ModalEliminar show={showDeleteModal} close={() => setShowDeleteModal(false)} eliminar={eliminarServicio} tipo={'servicio'}/>
            </div>
        </div>
    )
}

const Servicios = connect(mapStateToProps, mapDispatchToProps)(ConnectServicios);

export default Servicios
