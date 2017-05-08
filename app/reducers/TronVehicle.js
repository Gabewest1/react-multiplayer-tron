const velocity = 5

let initialState = {
    tronVehicle1: {top: 0, left: 0, velocity: velocity, color: "red"},
    tronVehicle2: {top: 0, left: 600, velocity: velocity, color: "green"},
    tronVehicle3: {top: 600, left: 0, velocity: velocity, color: "blue"},
    tronVehicle4: {top: 600, left: 600, velocity: velocity, color: "orange"}
}

export default function tronVehicle(state = initialState, action) {
    switch(action.type) {
        
        default: 
            return state
    }
}