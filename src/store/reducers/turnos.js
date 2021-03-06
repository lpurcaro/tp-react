import { EDITAR_FECHAS, EDITAR_HORARIOS, AGREGAR_TURNO, EDITAR_TURNO, ELIMINAR_TURNO } from '../constants/action_types'

// turno { id: int, fecha: date, horario: time, paciente: paciente, servicio: servicio}

const initialState = {
    // fechas: [],
    // horarios: [],
    turnos: [
        {id: 1, fecha: '25/11/2020', horario: '15:30', paciente: 1, servicio: 2},
        {id: 2, fecha: '23/11/2020', horario: '15:00', paciente: 1, servicio: 1}
    ]
};

function turnosReducer (state=initialState, action) {
    switch (action.type) {
        // case EDITAR_FECHAS:
        //      state.fechas = action.data;
        // break;
        // case EDITAR_HORARIOS:
        //     state.horarios = action.data;
        // break;
        case AGREGAR_TURNO:
            const id = state.turnos[state.turnos.length - 1].id + 1;
            action.data.id = id;
            state = Object.assign({}, state , {
                turnos: state.turnos.concat(action.data)
            });
        break;
        case EDITAR_TURNO:
            state = Object.assign({}, state , {
                turnos: state.turnos.map(turno => {
                    if (turno.id === action.data.id) {
                        turno = action.data
                    }
                    return turno;
                })
            });
        break;
        case ELIMINAR_TURNO:
            state = Object.assign({}, state , {
                turnos: state.turnos.filter(turno => turno.id !== action.data.id)
            });
        break;
    }

    return state
}

export default turnosReducer
