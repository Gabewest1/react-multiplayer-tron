// let initialState = {
//     tronVehicles: [
//         {tronVehicle0: {top: 0, left: 0, direction: "down", velocity: velocity, color: "red"}},
//         {tronVehicle1: {top: 0, left: 600, direction: "down", velocity: velocity, color: "green"}},
//         {tronVehicle2: {top: 600, left: 0, direction: "up", velocity: -velocity, color: "blue"}},
//         {tronVehicle3: {top: 600, left: 600, direction: "up", velocity: -velocity, color: "orange"}}
//     ]
// }
import { fromJS } from "immutable"
let initialState = fromJS({
    vehicles: []
})

export default function tronGame(state = initialState, action) {
    switch(action.type) {
        case "ADD_VEHICLE":
            return state.update("vehicles", (list) => list.push(action.vehicle))
        default: 
            return state
    }
}