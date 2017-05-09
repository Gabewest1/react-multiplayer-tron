export function setVehiclePosition(tronVehicle, position, value) {
    return {
        type: "SET_VEHICLE_POSITION",
        tronVehicle, 
        position, 
        value
    }
}