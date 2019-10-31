import React from "react"
import {Col, Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody, CardSubtitle} from "reactstrap"
import {Link} from "react-router-dom"
import '../index.css' ;


const ExistingMonster = ({ name, attack, defense, picture, attk1_name, attk1_value, attk2_name, attk2_value, attk3_name, attk3_value, id,level, description }) => {

    return (
        <React.Fragment>
            <Col xs={{size:6}}>
<Link to="/battle" >
        <Card  className="text-muted card " onClick={ ()=> { 
                localStorage.setItem("monsterID" , id)
                }}>
            
        
            <CardBody  >
                <CardTitle className="name" >{name}</CardTitle>
                
                </CardBody>
                <img width="100%" src={picture ? picture : "https://i.pinimg.com/originals/f8/64/5b/f8645b8957654aed39cb675376cc1783.jpg"} alt="Card image cap" />
                <CardBody>
                <CardText>{description}</CardText>
                <CardText className="action">Attaque : {attack}</CardText>
                <CardText className="action">Defense : {defense}</CardText>
                <CardText className="attak">First attack : {attk1_name} {attk1_value} dmg </CardText>
                <CardText className="attak">Second attack : {attk2_name} {attk2_value} dmg </CardText>
                <CardText className="attak">Third attack : {attk3_name} {attk3_value} dmg  </CardText>
            
          
            </CardBody>
        </Card>
               
            
</Link>
            </Col>
        </React.Fragment>



    )
}

export default ExistingMonster
