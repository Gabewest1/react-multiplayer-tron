import { selectUsersDirection, selectUsersVelocity } from "selectors/TronGame"

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
        let { vehicles, mapDimensions } = getState().tronGame.toJS()

        vehicles.forEach((vehicle, index) => {
            let position = topOrLeft(vehicle.direction)
            let value = vehicle[position] + vehicle.velocity

            if (
                value < 0 
                || position === "left" && value > mapDimensions.width 
                || position === "top" && value > mapDimensions.height
            ) {
                console.log("destroying car with index, value: ", index, value)
                dispatch({type: "DESTROY_VEHICLE", index})
            } else {
                dispatch({type: "MOVE_VEHICLE", index, position, value})
            } 
        })
    }
}

export function changeDirection(vehicle, newDirection) {
    return (dispatch, getState) => {
        let state = getState()
        let velocity = selectUsersVelocity(state.tronGame.toJS())
        let direction = selectUsersDirection(state.tronGame.toJS())

 
        let newVelocity = undefined
        switch(direction) {
            case "down":
            case "right":
                newVelocity = (newDirection === "up" || newDirection === "left") ? -velocity : velocity
                break
            case "left":
            case "up":
                newVelocity = (newDirection === "down" || newDirection === "right") ? -velocity : velocity
                break
        }
        console.log(direction, "new Velocity: ", newVelocity)
        dispatch({
            type: "CHANGE_DIRECTION",
            index: vehicle,
            direction: newDirection
        })
        dispatch({
            type: "CHANGE_VELOCITY",
            index: vehicle,
            velocity: newVelocity
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