import React from "react"
import { Avatar, Row, Typography } from "antd"

const ExistingMonster =({name, attack, defense, picture, id}) =>{
const {Text} = Typography

return(
    <React.Fragment>
        <Row justify="center">

            <Avatar shape="square" size={64} src={picture} />
            <Text strong> {name} </Text>
            
            <p>Attack value : {attack} Defense value : {defense}</p>
        </Row>
    </React.Fragment>



)
}

export default ExistingMonster
