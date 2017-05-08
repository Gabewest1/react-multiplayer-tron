import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

let TronVehicle = styled.div`
    background-color: ${(props) => props.color}
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    height: 50px;
    width: 50px;
    border-radius: 0 50% 50% 0 
`

TronVehicle.propTypes = {
    color: PropTypes.string.isRequired,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired
}

export default TronVehicle