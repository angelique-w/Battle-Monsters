import React from "react"
import { Container, Row } from "reactstrap"

const BattleDisplay = ({ messages }) => {


    return (
        <Container>
            <Row className="justify-content-center">
                {messages.length !== 0 ? (messages.map(msg => {
                    return <p>{msg}</p>
                })) : "Ready for Battle"}
            </Row>
        </Container>
    )




}

export default BattleDisplay