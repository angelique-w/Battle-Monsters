import React from "react"
import {Container, Row} from "reactstrap"

const BattleDisplay = ({message}) => {


    return(
        <Container>
            <Row>
        <p>{message}</p>
            </Row>
        </Container>
    )




}

export default BattleDisplay