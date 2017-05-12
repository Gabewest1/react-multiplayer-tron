import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import TronVehicle from "components/TronVehicle"
import Container from "./Container"

import * as actions from "./actions"
import { selectUsersDirection } from "selectors/TronGame"

class TronGame extends React.Component {
    constructor(props) {
        super(props)
        let velocity = 5
        const directions = ["down", "up", "down", "up"]
        const MAX_WIDTH = props.mapDimensions.width-25
        const MAX_HEIGHT = props.mapDimensions.height-25
        const colors = ["red", "green", "yellow", "blue", "black"]
        const positions = [[0,0], [0, MAX_HEIGHT], [MAX_WIDTH, 0], [MAX_WIDTH, MAX_HEIGHT]]

        for(var i=0; i<props.numPlayers; i++) {
            let [ left, top ] = positions[i]
            let color = colors[i]   
            let direction = directions[i]
            let velocity = direction === "down" ? 5 : -5
            let vehicle = {left, top, direction, velocity, color, isAlive: true }
            console.log(positions[i])
            i === 0 ? props.addHuman(vehicle) : props.addComputer(vehicle)

            props.addVehicle(vehicle)
        }
    }
    componentDidMount() {
        let { usersVehicle, changeDirection} = this.props
        document.addEventListener("keydown", (e) => {
            console.log("key pressed!")
            if(e.keyCode === 37) {
                changeDirection(usersVehicle, "left")
            } else if(e.keyCode === 38) {
                changeDirection(usersVehicle, "up")
            } else if(e.keyCode === 39) {
                changeDirection(usersVehicle, "right")
            } else if(e.keyCode === 40) {
                changeDirection(usersVehicle, "down")
            }
        })

        // setInterval(this.props.moveVehicles, 200)
    }

    render() {
        const TronVehicles = this.props.vehicles.map((vehicle, key) => (
            <TronVehicle key={key} {...vehicle} />
        ))
        return (
            <Container>
                <button onClick={this.props.moveVehicles} >Move</button>
                { TronVehicles }
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        ...state.tronGame.toJS(),
        direction: selectUsersDirection(state.tronGame.toJS())
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TronGame)