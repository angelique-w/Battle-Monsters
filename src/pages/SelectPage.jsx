import React from 'react';
import {Row, Col } from "reactstrap"

import Header from '../components/Header';
import NewMonster from '../components/NewMonster';
import ExistingMonsters from '../components/ExistingMonsters';
import UsernameBanner from '../components/UsernameBanner';


function SelectPage() {
    return (
        <div>
            <Header />
            <UsernameBanner />
                
            <Row>
                <Col xs={12} xl={10} lg={12} className="text-center text-warning offset-1 offset-xl-1">
                <h3>Select a monster to figth with or create one</h3>
                </Col>
                <Col xs={12} lg={10} xl={10} className="offset-lg-1 offset-xl-0">    
                    <ExistingMonsters />
                </Col>
                <Col xs={12} lg={12} xl={2} >
                    <NewMonster />
                </Col>
            </Row>
        </div>
    
    )
}

export default SelectPage;