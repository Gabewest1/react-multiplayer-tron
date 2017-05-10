import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import * as actions from "./actions"

import TronVehicle from "components/TronVehicle"
import Container from "./Container"

import styled from "styled-components"

let Button = styled.button`
    margin-top: 300px;
    margin-left: 500px;
`

class TronVehicleContainer extends React.Component {
    componentDidMount() {
        
    }
    moveTronVehicles() {
        let { tronVehicles } = this.props
        let nextPositions = tronVehicles.map((vehicle, key) => {
            let vehicleStats = vehicle[`tronVehicle${key}`]
            let position = this.topOrLeft(vehicleStats.direction)
            let newPosition = vehicleStats[position]+vehicleStats.velocity
            return [position, newPosition]
        })

        tronVehicles.forEach((vehicle, vehicleNumber) => {
            this.props.setVehiclePosition(`tronVehicle${vehicleNumber}`, nextPositions[vehicleNumber][0], nextPositions[vehicleNumber][1])
        })
    }

    topOrLeft(direction) {
        switch(direction) {
            case "up":
            case "down":
                return "top"
            case "left":
            case "right":
                return "left"
        }
    }

    render() {
 
        return (
            <TronVehicle {...this.props} />
        )
    }
}

function mapStateToProps(state) {
    return {
        ...state.tronVehicle.toJS()
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TronVehicleContainer)