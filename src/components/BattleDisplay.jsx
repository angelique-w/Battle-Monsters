import React from "react"
import { Container, Col, Row } from "reactstrap"

const BattleDisplay = ({ messages }) => {


    return (
        <Container id="battleZoneDisplay">
            <Row className="justify-content-center text-white align-content-end" >
                {messages.length !== 0 ? (messages.map(msg => {
                    return <Col  xs={6}>{msg}</Col>
                })) : <Col xs={12} className="text-center">Ready for Battle</Col>}
            </Row>
        </Container>
    )




}

export default BattleDisplay