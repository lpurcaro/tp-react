import { AGREGAR_SERVICIO, EDITAR_SERVICIO, ELIMINAR_SERVICIO } from '../constants/action_types'

// servicio { nombre: string, tipo: tipoAtencion, precio: double, duracionMinutos: int}

const initialState = {
    tipoAtencion: ['Estética', 'Médica'],
    servicios: []
};

function serviciosReducer (state=initialState, action) {
    switch (action.type) {
        case AGREGAR_SERVICIO:
        break;
        case EDITAR_SERVICIO:
        break;
        case ELIMINAR_SERVICIO:
        break;
    }

    return state
}

export default serviciosReducer
