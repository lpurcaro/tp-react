import { AGREGAR_SERVICIO, EDITAR_SERVICIO, ELIMINAR_SERVICIO } from '../constants/action_types'

// servicio { id: int, nombre: string, tipo: tipoAtencion, precio: double, duracionMinutos: int}

const initialState = {
    tipoAtencion: ['Estético', 'Médico'],
    servicios: [{
        id: 1,
        nombre: 'Baño',
        tipo: 'Estético',
        precio: 600,
        duracion: 30
    },
    {
        id: 2,
        nombre: 'Corte',
        tipo: 'Estético',
        precio: 600,
        duracion: 30
    },
    {
        id: 3,
        nombre: 'Castración',
        tipo: 'Médico',
        precio: 5000,
        duracion: 60
    },
    {
        id: 4,
        nombre: 'Consulta',
        tipo: 'Médico',
        precio: 950,
        duracion: 30
    }]
};

function serviciosReducer (state=initialState, action) {
    switch (action.type) {
        case AGREGAR_SERVICIO:
            const id = state.servicios[state.servicios.length - 1].id + 1;
            state = Object.assign({}, state , {
                servicios: state.servicios.concat({id, ...action.data})
            });
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
