import { createSelector } from "reselect"
import * as fromTronGame from "reducers/TronGame"

export const selectVehicles = (state) => state.vehicles
export const selectUsersVehicle = (state) => state.usersVehicle

export const selectUsersDirection = createSelector(
    selectVehicles, selectUsersVehicle,
    (vehicles, indexOfUsersVehicle) => {
        let usersVehicle = vehicles ? vehicles[indexOfUsersVehicle] : undefined
        return usersVehicle ?  usersVehicle.direction : undefined
    }
)

selectUsersVelocity

export const selectUsersVelocity = createSelector(
    selectVehicles, selectUsersVehicle,
    (vehicles, indexOfUsersVehicle) => {
        let usersVehicle = vehicles ? vehicles[indexOfUsersVehicle] : undefined
        return usersVehicle ?  usersVehicle.velocity : undefined
    }
)