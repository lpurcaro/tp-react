import { AGREGAR_SERVICIO, EDITAR_SERVICIO, ELIMINAR_SERVICIO } from '../constants/action_types'

// servicio { id: int, nombre: string, tipo: tipoAtencion, precio: double, duracionMinutos: int}

const initialState = {
    tipoAtencion: ['Estética', 'Médica'],
    servicios: []
};

function serviciosReducer (state=initialState, action) {
    switch (action.type) {
        case AGREGAR_SERVICIO:
            state.servicios.push(action.data);
        break;
        case EDITAR_SERVICIO:
            let idxEditar = state.servicios.findIndex(servicio => servicio.id === action.data.id);
            state.servicios[idxEditar] = action.data.servicio;
        break;
        case ELIMINAR_SERVICIO:
            let idxEliminar = state.servicios.findIndex(servicio => servicio.id === action.data.id);
            state.servicios.splice(idxEliminar, 1);
        break;
    }

    return state
}

export default serviciosReducer
