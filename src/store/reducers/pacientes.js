import { AGREGAR_PACIENTE, EDITAR_PACIENTE, AGREGAR_ATENCION } from '../constants/action_types'

// paciente { id: int, nombre: string, fechaNac: date, dueno: string, historial: atencion[]}
// atencion { fecha: date, servicio: servicio, comentarios: string}

const initialState = {
    pacientes: [{
        id: 1,
        nombre: 'Coyote',
        fechaNac: '05/03/2019',
        dueno: 'Lucila Purcaro',
        historial: []
    }]
};

function pacientesReducer (state=initialState, action) {
    switch (action.type) {
        case AGREGAR_PACIENTE:
            state.pacientes.push(action.data);
        break;
        case EDITAR_PACIENTE:
            let idxEditar = state.pacientes.findIndex(paciente => paciente.id = action.data.id);
            state.pacientes[idxEditar] = action.data.paciente;
        break;
        case AGREGAR_ATENCION:
            let idxAgregar  = state.pacientes.findIndex(paciente => paciente.id = action.data.id);
            state.pacientes[idxAgregar].historial.push(action.data.atencion);
        break;
    }

    return state
}

export default pacientesReducer
