const velocity = 5

let initialState = {
    tronVehicles: [
        {tronVehicle1: {top: 0, left: 0, direction: "down", velocity: velocity, color: "red"}},
        {tronVehicle2: {top: 0, left: 600, direction: "down", velocity: velocity, color: "green"}},
        {tronVehicle3: {top: 600, left: 0, direction: "up", velocity: -velocity, color: "blue"}},
        {tronVehicle4: {top: 600, left: 600, direction: "up", velocity: -velocity, color: "orange"}}
    ]
}

export default function tronVehicle(state = initialState, action) {
    switch(action.type) {
        case "SET_VEHICLE_POSITION": {
            let { tronVehicle, position, value } = action
            let tronVehicleState = state.tronVehicles.filter(vehicle => vehicle === tronVehicle)
            let newState = {
                ...state, 
                tronVehicles: [
                    ...state.tronVehicles,
                    {...tronVehicle, [position]: value}
                ]
            }
            console.log(newState)
            return newState
        }
        default: 
            return state
    }
}