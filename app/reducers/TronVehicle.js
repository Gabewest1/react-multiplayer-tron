const velocity = 5

let initialState = {
    tronVehicles: [
        {tronVehicle0: {top: 0, left: 0, direction: "down", velocity: velocity, color: "red"}},
        {tronVehicle1: {top: 0, left: 600, direction: "down", velocity: velocity, color: "green"}},
        {tronVehicle2: {top: 600, left: 0, direction: "up", velocity: -velocity, color: "blue"}},
        {tronVehicle3: {top: 600, left: 600, direction: "up", velocity: -velocity, color: "orange"}}
    ]
}

export default function tronVehicle(state = initialState, action) {
    switch(action.type) {
        case "SET_VEHICLE_POSITION": {
            let { tronVehicle, position, value } = action
            let tronVehicleToUpdate = state.tronVehicles.filter(vehicle => vehicle.hasOwnProperty(tronVehicle))[0]
            let updatedTronVehicle = {...tronVehicleToUpdate}
            updatedTronVehicle[tronVehicle][position] = value   

            let updatedTronVehicles = 
                    state.tronVehicles.map(vehicle => vehicle.hasOwnProperty(tronVehicle) 
                                                    ? updatedTronVehicle 
                                                    : vehicle
                                          )                         

            return {...state, tronVehicles: updatedTronVehicles}
        }
        default: 
            return state
    }
}