import { AGREGAR_PACIENTE, EDITAR_PACIENTE, AGREGAR_ATENCION } from '../constants/action_types'

// paciente { nombre: string, fechaNac: date, dueno: string, historial: atencion[]}
// atencion { fecha: date, servicio: servicio, comentarios: string}

const initialState = {
    pacientes: []
};

function pacientesReducer (state=initialState, action) {
    switch (action.type) {
        case AGREGAR_PACIENTE:
        break;
        case EDITAR_PACIENTE:
        break;
        case AGREGAR_ATENCION:
        break;
    }

    return state
}

export default pacientesReducer
