import { EDITAR_FECHAS, EDITAR_HORARIOS, AGREGAR_TURNO, EDITAR_TURNO, ELIMINAR_TURNO} from '../constants/action_types'

export function editarFechas (data) {
    return {
        type: EDITAR_FECHAS,
        data
    }
}

export function editarHorarios (data) {
    return {
        type: EDITAR_HORARIOS,
        data
    }
}

export function agregarTurno (data) {
    return {
        type: AGREGAR_TURNO,
        data
    }
}

export function editarTurno (data) {
    return {
        type: EDITAR_TURNO,
        data
    }
}

export function eliminarTurno (data) {
    return {
        type: ELIMINAR_TURNO,
        data
    }
}
