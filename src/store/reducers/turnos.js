import { EDITAR_FECHAS, EDITAR_HORARIOS, AGREGAR_TURNO, EDITAR_TURNO, ELIMINAR_TURNO } from '../constants/action_types'

// turno { fecha: date, paciente: paciente, servicio: servicio}

const initialState = {
    turnos: []
};

function turnosReducer (state=initialState, action) {
    switch (action.type) {
        case EDITAR_FECHAS:
        break;
        case EDITAR_HORARIOS:
        break;
        case AGREGAR_TURNO:
        break;
        case EDITAR_TURNO:
        break;
        case ELIMINAR_TURNO:
        break;
    }

    return state
}

export default turnosReducer
