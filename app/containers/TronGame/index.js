import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import TronVehicle from "containers/TronVehicleContainer"
import Container from "./Container"

import * as actions from "./actions"

class TronGame extends React.Component {
    constructor(props) {
        console.log(window.innerWidth)
        const velocity = 5
        let MAX_WIDTH = 600
        let MAX_HEIGHT = 600
        let colors = ["red", "green", "yellow", "blue", "black"]
        let positions = [[0,0], [0, MAX_HEIGHT], [MAX_WIDTH, 0], [MAX_WIDTH, MAX_HEIGHT]]
        super(props)
        for(var i=0; i<props.numPlayers; i++) {
            let position = positions[i]
            let color = colors[i]   
            console.log(position)
            props.addVehicle({left: position[0], top: position[1], direction: "down", velocity, color, isAlive: true })
        }
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
        console.log(this.props)
        const TronVehicles = this.props.vehicles.map((vehicle, key) => (
            <TronVehicle key={key} {...vehicle} />
        ))
        return (
            <Container>
                {/*<Button onClick={this.moveTronVehicles.bind(this)} >Move</Button>*/}
                { TronVehicles }
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        ...state.tronGame.toJS()
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TronGame)