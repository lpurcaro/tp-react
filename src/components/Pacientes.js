import React, {useState} from 'react';
import {Row, Col, Button, Accordion} from 'react-bootstrap';
import {connect} from 'react-redux';
import {agregarPaciente, editarPaciente} from "../store/actions";
import ModalPacientes from "./ModalPacientes";
import DetallePaciente from "./DetallePaciente";

const mapStateToProps = (state) => {
    return {
        listaPacientes: state.pacientes.pacientes,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        agregar: paciente => dispatch(agregarPaciente(paciente)),
        editar: paciente => dispatch(editarPaciente(paciente))
    }
};

const ConnectPacientes = ({listaPacientes, agregar, editar}) => {

    const [showEditModal, setShowEditModal] = useState(false);
    const [showAgregarModal, setShowAgregarModal] = useState(false);
    const [pacienteAEditar, setPacienteAEditar] = useState({});

    const toggleShowEditModal = (id) => {
        setPacienteAEditar(listaPacientes.find(servicio => servicio.id === id));
        setShowEditModal(true);
    };

    return (
        <div>
            <div>
                <Row>
                    <Col><h2>Servicios disponibles</h2></Col>
                    <Col className={'btn-column'}>
                        <Button variant="outline-primary" onClick={() => setShowAgregarModal(true)}>Agregar Paciente</Button>
                        <ModalPacientes paciente={{}} onSubmit={agregar} onClose={() => setShowAgregarModal(false)} show={showAgregarModal} nuevo={true}/>
                    </Col>
                </Row>
            </div>
            <div className={'mt-md'}>
                <Accordion>
                    {listaPacientes.map(paciente => <DetallePaciente paciente={paciente} key={paciente.id} editar={toggleShowEditModal}/>)}
                </Accordion>
                <ModalPacientes paciente={pacienteAEditar} show={showEditModal} onClose={() => setShowEditModal(false)} onSubmit={editar}/>
            </div>
        </div>
    )
};

const Pacientes = connect(mapStateToProps, mapDispatchToProps)(ConnectPacientes);

export default Pacientes
