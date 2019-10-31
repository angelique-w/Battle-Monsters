import React from 'react';
import { Container, Row, Col } from "reactstrap"

import Header from '../components/Header';
import NewMonster from '../components/NewMonster';
import ExistingMonsters from '../components/ExistingMonsters';
import UsernameBanner from '../components/UsernameBanner';


function SelectPage() {
    return (
        <div>
            <Header />
            <UsernameBanner />
            <Container>
                <Row>
                    <Row className="col-10">    
                        <ExistingMonsters />
                    </Row>
                    <Row className="col-2">
                    <Col xs="12">
                        <NewMonster />
                    </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    )
}

export default SelectPage;