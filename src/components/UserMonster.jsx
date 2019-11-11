import React from "react"
import {Container, Card, CardBody, CardTitle, CardText, Progress} from "reactstrap"


const UserMonster = ({name, attack, defense, picture, energy, maxHP}) => {


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
                Stamina : {energy}
                <Progress value={energy}></Progress>
            </CardText>
            <CardText>
                Health Points : {defense}
                <Progress color={"success"} value={defense} max={maxHP}></Progress>
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