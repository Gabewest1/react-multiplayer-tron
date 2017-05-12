import styled from "styled-components"

let Container = styled.div`
    border: solid 5px #fff033;
    width: ${(props) => props.width && props.width}
    height: ${(props) => props.height && props.height}
    position: relative;
`

export default Container