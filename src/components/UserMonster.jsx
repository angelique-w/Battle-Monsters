import React from "react"
import {Container, Card, CardBody, CardTitle, CardText} from "reactstrap"


const UserMonster = ({name, attack, defense, picture}) => {


    return( 
        <>
        <Container>
        <Card>
        <CardBody>
            <CardTitle>{name}</CardTitle>
        </CardBody>
        <img width="100%" src={picture} alt={name} />
        <CardBody>
            <CardText>
                <h5>Health Points : {defense}</h5>
            </CardText>
            <CardText>
                Attack Power : {attack}
            </CardText>      
        </CardBody>
    </Card>



        </Container>


        
        </>
    )




}

export default UserMonster