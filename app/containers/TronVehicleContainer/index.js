import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import * as actions from "./actions"

import TronVehicle from "components/TronVehicle"
import Container from "./Container"

class TronVehicleContainer extends React.Component {

    render() {
        const { tronVehicle1, tronVehicle2, tronVehicle3, tronVehicle4 } = this.props
        return (
            <Container>
                <TronVehicle {...tronVehicle1} />
                <TronVehicle {...tronVehicle2} />
                <TronVehicle {...tronVehicle3} />
                <TronVehicle {...tronVehicle4} />
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