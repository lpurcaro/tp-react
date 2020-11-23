import React from 'react';
import { Accordion } from 'react-bootstrap';
import DetalleTurno from './DetalleTurno';

const ListaTurnos = ({turnos, eliminar, editar}) => {
    return (
        <Accordion>
            {turnos.map(turno => <DetalleTurno turno={turno} key={turno.id} eliminar={eliminar} editar={editar}/>)}
        </Accordion>
    )
}

export default ListaTurnos
