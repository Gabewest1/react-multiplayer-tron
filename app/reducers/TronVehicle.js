import { fromJS } from "immutable"
const velocity = 5

let initialState = fromJS({
    // top: 0, 
    // left: 0, 
    // direction: "down", 
    // velocity: velocity, 
    // color: "red",
    // isAlive: true
})

export default function tronVehicle(state = initialState, action) {
    switch(action.type) {
        case "SET_POSITION": {
            return state.set(action.position, action.value)
        }
        case "SET_COLOR": {
            return state.set("color", action.color)
        }
        case "SET_DIRECTION": {
            return state.set("direction", action.direction)
        }
        
        default: 
            return state
    }
}