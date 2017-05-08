import React from "react"

import TronVehicleContainer from "containers/TronVehicleContainer"
import Container from "./Container"

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <TronVehicleContainer />
            </Container>
        )
    }
}