import React from 'react';
import {Button, Modal} from "react-bootstrap";

const ModalEliminar = ({show, close, eliminar, tipo}) => {
    return (
        <Modal show={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar {tipo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>¿Estas seguro que querés eliminar el elemento?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={eliminar}>
                    Eliminar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalEliminar
