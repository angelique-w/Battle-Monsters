import React from 'react';
import {Row, Col} from "antd"
 
import Header from '../components/Header';
import NewMonster from '../components/NewMonster';
import ExistingMonsters from '../components/ExistingMonsters';

function SelectPage() {
    return (
        <div>
            <Header />
            <Row>
                <Col xs={12} >
                    <ExistingMonsters />
                </Col >
                <Col xs={12}>
                <NewMonster />
                </Col>
            </Row>
        </div>
    )
}

export default SelectPage;