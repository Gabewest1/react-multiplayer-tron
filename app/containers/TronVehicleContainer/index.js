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
        // setInterval(this.moveTronVehicles.bind(this), 1)
    }
    moveTronVehicles() {
        let { tronVehicle1, tronVehicle2, tronVehicle3, tronVehicle4 } = this.props
        let tronVehicles = [tronVehicle1, tronVehicle2, tronVehicle3, tronVehicle4]
        let nextPositions = tronVehicles.map(vehicle => {
            let position = this.topOrLeft(vehicle.direction)
            let newPosition = vehicle[position]+vehicle.velocity
            return [position, newPosition]
        })

        tronVehicles.forEach((vehicle, vehicleNumber) => {
            // let vehicle = `tronVehicle${vehicleNumber+1}`
            console.log(vehicle, position[0], position[1] )
            this.props.setVehiclePosition(vehicle, nextPositions[vehicleNumber][0], nextPositions[vehicleNumber][1])
        })
        
        // nextPositions.forEach((position, vehicleNumber) => {
        //     let vehicle = `tronVehicle${vehicleNumber+1}`
        //     console.log(vehicle, position[0], position[1] )
        //     this.props.setVehiclePosition(vehicle, position[0], position[1])
        // })

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
        console.log(this.props.tronVehicles)
        // const { tronVehicle1, tronVehicle2, tronVehicle3, tronVehicle4 } = this.props
        const TronVehicles = this.props.tronVehicles.map((vehicle, key) => (
            <TronVehicle key={key} {...vehicle[`tronVehicle${key+1}`]} />
        ))
        return (
            <Container>
                <Button onClick={this.moveTronVehicles.bind(this)} >Move</Button>
                { TronVehicles }
            </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(TronVehicleContainer)