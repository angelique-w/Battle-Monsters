import React from 'react';
import { Button, Select, Option, Card } from 'antd';

import CardNewMonster from './CardNewMonster';


function NewMonster() {
    const { Option } = Select;
    const { Meta } = Card;
    
    return (
        <div>
            <h1>New Monster</h1>
            <Select defaultValue="Choose your monster to customize" style={{ width: 300 }} >
                <Option value="Choose your monster to customize">Choose your monster to customize</Option>
            </Select>
            <Card
                hoverable
                style={{ width: 200 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <h3>Europe Street beat</h3>
                <p>PV : {}</p>
                <p>Attack : {}</p>
            </Card>
            <Button>Create New Monster</Button>
        </div>
    );
}


export default NewMonster;