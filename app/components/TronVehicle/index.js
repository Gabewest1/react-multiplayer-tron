import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

let TronVehicle = styled.div`
    background-color: ${(props) => props.color}
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    height: 25px;
    width: 25px;
    border-radius: ${(props) => borderRadius(props.direction)} 
`

function borderRadius(direction) {
    switch(direction) {
        case "up":
            return "50% 50% 0 0"
        case "right":
            return "0 50% 50% 0"
        case "down":
            return "0 0 50% 50%"
        case "left":
            return "50% 0 0 50%"
    }
}

TronVehicle.propTypes = {
    color: PropTypes.string.isRequired,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired
}

export default TronVehicle