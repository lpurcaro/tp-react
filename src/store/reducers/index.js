import { combineReducers } from 'redux'
import pacientes from './pacientes'
import servicios from './servicios'
import turnos from './turnos'

export default combineReducers({
    pacientes,
    servicios,
    turnos
})


