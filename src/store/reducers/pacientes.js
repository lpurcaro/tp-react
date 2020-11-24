import { AGREGAR_PACIENTE, EDITAR_PACIENTE, AGREGAR_ATENCION } from '../constants/action_types'

// paciente { id: int, nombre: string, fechaNac: date, dueno: string, historial: atencion[], telefono: string}
// atencion { fecha: date, servicio: servicio, comentarios: string}

const initialState = {
    pacientes: [{
        id: 1,
        nombre: 'Coyote',
        fechaNac: '05/03/2015',
        dueno: 'Lucila Purcaro',
        historial: [],
        telefono: '1234-5678'
    },
    {
        id: 2,
        nombre: 'Morrison',
        fechaNac: '10/10/2017',
        dueno: 'Lucila Purcaro',
        historial: [],
        telefono: '1234-5678'
    }]
};

function pacientesReducer (state=initialState, action) {
    switch (action.type) {
        case AGREGAR_PACIENTE:
            const id = state.pacientes[state.pacientes.length - 1].id + 1;
            action.data.id = id;
            state = Object.assign({}, state , {
                pacientes: state.pacientes.concat(action.data)
            });
        break;
        case EDITAR_PACIENTE:
            state = Object.assign({}, state , {
                pacientes: state.pacientes.map(paciente => {
                    if (paciente.id === action.data.id) {
                        paciente = action.data
                    }
                    return paciente;
                })
            });
        break;
        case AGREGAR_ATENCION:
            let idxAgregar  = state.pacientes.findIndex(paciente => paciente.id = action.data.id);
            state.pacientes[idxAgregar].historial.push(action.data.atencion);
        break;
    }

    return state
}

export default pacientesReducer
