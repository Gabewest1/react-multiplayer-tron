import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import * as actions from "./actions"

import TronVehicle from "components/TronVehicle"

export default class TronVehicleContainer extends React.Component {
    constructor() {

    }
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}