export function addVehicle(vehicle) {
    return {
        type: "ADD_VEHICLE",
        vehicle
    }
}

export function addHuman(vehicle) {
    return {
        type: "ADD_HUMAN",
        vehicle
    }
}

export function addComputer(vehicle) {
    return {
        type: "ADD_COMPUTER",
        vehicle
    }
}

export function moveVehicles() {
    return (dispatch, getState) => {
        let { vehicles } = getState().tronGame.toJS()
        console.log(getState())
        let newLocations = vehicles.map(vehicle => {
            let position = topOrLeft(vehicle.direction)
            let value = vehicle[position] + vehicle.velocity
            return {position, value}
        })
        newLocations.forEach(({position, value}, index) => {
            dispatch({
                type: "MOVE_VEHICLES",
                position,
                value,
                index 
            })
        })
    }
}

function topOrLeft(direction) {
    switch(direction) {
        case "up":
        case "down":
            return "top"
        case "left":
        case "right":
            return "left"
    }
}