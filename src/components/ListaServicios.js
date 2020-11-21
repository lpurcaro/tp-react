import React from 'react';
import { Accordion } from 'react-bootstrap';
import DetalleServicio from './DetalleServicio';

const ListaServicios = ({servicios, eliminar, editar}) => {

    return (
        <Accordion>
            {servicios.map(servicio => <DetalleServicio servicio={servicio} key={servicio.id} eliminar={eliminar} editar={editar}/>)}
        </Accordion>
    )
}

export default ListaServicios
