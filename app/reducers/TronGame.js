import { fromJS, Map, List } from "immutable"

let initialState = Map({
    vehicles: List(),
    humans: List(),
    computers: List(),
    usersVehicle: 0,
    mapDimensions: {width: window.innerWidth, height: window.innerHeight},
})
console.log(window.innerWidth,window.innerHeight)
export default function tronGame(state = initialState, action) {
    switch(action.type) {
        case "ADD_VEHICLE":
            return state.update("vehicles", (list) => list.push(Map(action.vehicle)))
        case "ADD_HUMAN":
            return state.update("humans", (list) => list.push(Map(action.vehicle)))
        case "ADD_COMPUTER":
            return state.update("computers", (list) => list.push(Map(action.vehicle)))
        case "MOVE_VEHICLE":
            return state.update("vehicles", (list) => list.update(action.index, vehicle => {
                return vehicle.set(action.position, action.value)
            }))
        case "CHANGE_DIRECTION":
            return state.update("vehicles", (list) => list.update(action.index, vehicle => {
                return vehicle.set("direction", action.direction)
            }))
        case "CHANGE_VELOCITY":
            return state.update("vehicles", (list) => list.update(action.index, vehicle => {
                return vehicle.set("velocity", action.velocity)
            }))
        case "DESTROY_VEHICLE":
            return state.update("vehicles", (list) => list.update(action.index, vehicle => {
                return vehicle.set("isAlive", true)
            }))
        case "SET_USERS_VEHICLE":
            return state.set("usersVehicle", action.vehicleIndex)
        default: 
            return state
    }
}