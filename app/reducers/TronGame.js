import { fromJS } from "immutable"

let initialState = fromJS({
    vehicles: [],
    humans: [],
    computers: [],
    usersVehicle: undefined
})

export default function tronGame(state = initialState, action) {
    switch(action.type) {
        case "ADD_VEHICLE":
            return state.update("vehicles", (list) => list.push(action.vehicle))
        case "ADD_HUMAN":
            return state.update("humans", (list) => list.push(action.vehicle))
        case "ADD_COMPUTER":
            return state.update("computers", (list) => list.push(action.vehicle))
        default: 
            return state
    }
}