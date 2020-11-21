import { EDITAR_FECHAS, EDITAR_HORARIOS, AGREGAR_TURNO, EDITAR_TURNO, ELIMINAR_TURNO } from '../constants/action_types'

// turno { id: int, fecha: date, paciente: paciente, servicio: servicio}

const initialState = {
    fechas: [],
    horarios: [],
    turnos: []
};

function turnosReducer (state=initialState, action) {
    switch (action.type) {
        case EDITAR_FECHAS:
             state.fechas = action.data;
        break;
        case EDITAR_HORARIOS:
            state.horarios = action.data;
        break;
        case AGREGAR_TURNO:
            state.turnos.push(action.data);
        break;
        case EDITAR_TURNO:
            let turno = state.turnos.findIndex(turno => turno.id === action.data.id);
            state.turnos[turno] = action.data.turno;
        break;
        case ELIMINAR_TURNO:
            let eliminar = state.turnos.findIndex(turno => turno.id === action.data.id);
            state.servicios.splice(eliminar, 1);
        break;
    }

    return state
}

export default turnosReducer