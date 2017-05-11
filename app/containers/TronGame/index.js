import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import TronVehicle from "components/TronVehicle"
import Container from "./Container"

import * as actions from "./actions"

class TronGame extends React.Component {
    constructor(props) {
        super(props)
        let velocity = 5
        const directions = ["down", "up", "down", "up"]
        const MAX_WIDTH = window.innerWidth-25
        const MAX_HEIGHT = window.innerHeight-25
        const colors = ["red", "green", "yellow", "blue", "black"]
        const positions = [[0,0], [0, MAX_HEIGHT], [MAX_WIDTH, 0], [MAX_WIDTH, MAX_HEIGHT]]

        for(var i=0; i<props.numPlayers; i++) {
            let [ left, top ] = positions[i]
            let color = colors[i]   
            let direction = directions[i]
            let velocity = direction === "down" ? 5 : -5
            let vehicle = {left, top, direction, velocity, color, isAlive: true }

            i === 0 ? props.addHuman(vehicle) : props.addComputer(vehicle)

            props.addVehicle(vehicle)
        }
    }
    
    moveVehicles() {
        this.props.moveVehicles()
    }

    render() {
        console.log(this.props)
        const TronVehicles = this.props.vehicles.map((vehicle, key) => (
            <TronVehicle key={key} {...vehicle} />
        ))
        return (
            <Container>
                <button onClick={this.moveVehicles.bind(this)} >Move</button>
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