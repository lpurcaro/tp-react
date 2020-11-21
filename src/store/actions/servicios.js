import {AGREGAR_SERVICIO, EDITAR_SERVICIO, ELIMINAR_SERVICIO} from '../constants/action_types'

export function agregarServicio (data) {
    return {
        type: AGREGAR_SERVICIO,
        data
    }
}

export function editarServicio (data) {
    return {
        type: EDITAR_SERVICIO,
        data
    }
}

export function eliminarServicio (data) {
    return {
        type: ELIMINAR_SERVICIO,
        data
    }
}
