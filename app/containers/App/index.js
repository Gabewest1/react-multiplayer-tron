import React from "react"

import TronVehicle from "components/TronVehicle"
import Container from "./Container"

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <TronVehicle color="red" top={150} left={50}/>
            </Container>
        )
    }
}