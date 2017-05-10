import React from "react"

import TronGame from "containers/TronGame"
import Container from "./Container"

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <TronGame numPlayers={4}/>
            </Container>
        )
    }
}