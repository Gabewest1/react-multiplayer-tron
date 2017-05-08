import React from "react"

import TronVehicle from "components/TronVehicle"

export default class TronVehicleContainer extends React.Component {
    render() {
        return (
            <TronVehicle {...state} />
        )
    }
}

function mapStateToProps(state) {
    return {
        ...state.tronVehicle
    }
}