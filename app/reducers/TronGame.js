import { fromJS, Map, List } from "immutable"

let initialState = Map({
    vehicles: List(),
    humans: List(),
    computers: List(),
    usersVehicle: undefined
})

export default function tronGame(state = initialState, action) {
    switch(action.type) {
        case "ADD_VEHICLE":
            return state.update("vehicles", (list) => list.push(Map(action.vehicle)))
        case "ADD_HUMAN":
            return state.update("humans", (list) => list.push(Map(action.vehicle)))
        case "ADD_COMPUTER":
            return state.update("computers", (list) => list.push(Map(action.vehicle)))
        case "MOVE_VEHICLES":
            return state.update("vehicles", (list) => list.update(action.index, vehicle => {
                return vehicle.update(action.position, val => action.value)
            }))
        case "SET_USERS_VEHICLE":
            return state.set("usersVehicle", action.vehicleIndex)
        default: 
            return state
    }
}