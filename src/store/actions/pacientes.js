import { AGREGAR_PACIENTE, EDITAR_PACIENTE, AGREGAR_ATENCION } from '../constants/action_types'

export function agregarPaciente (data) {
    return {
        type: AGREGAR_PACIENTE,
        data
    }
}

export function editarPaciente (data) {
    return {
        type: EDITAR_PACIENTE,
        data
    }
}

export function agregarAtencion (data) {
    return {
        type: AGREGAR_ATENCION,
        data
    }
}
