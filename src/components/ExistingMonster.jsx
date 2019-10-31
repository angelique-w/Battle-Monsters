import React from "react"
import {Col, Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap"
import {Link} from "react-router-dom"

const ExistingMonster = ({ name, attack, defense, picture, attk1_name, attk1_value, attk2_name, attk2_value, attk3_name, attk3_value, id }) => {

    return (
        <React.Fragment>
            <Col Col xs={{size:6}}>
<Link to="/battle" >
            <Card className="text-warning" onClick={ ()=> { 
                localStorage.setItem("monsterID" , id)
                }}>
                <CardImg src={picture ? picture : "https://i.pinimg.com/originals/f8/64/5b/f8645b8957654aed39cb675376cc1783.jpg"} />
                <CardImgOverlay>
                    <CardTitle className="text-strong" >{name}</CardTitle>
                    <CardText >
                        Attack : {attack}
                        <br/> Defense : {defense}
                        <ul>
                            <li>First attack : {attk1_name} {attk1_value} dmg </li>
                            <li>Second attack : {attk2_name} {attk2_value} dmg </li>
                            <li>Third attack : {attk3_name} {attk3_value} dmg </li>
                        </ul>
                    </CardText>
                </CardImgOverlay>
            </Card>
</Link>
            </Col>
        </React.Fragment>



    )
}

export default ExistingMonster
