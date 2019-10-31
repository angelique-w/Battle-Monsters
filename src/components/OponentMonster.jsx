import React from "react"
import {Container, Card, CardBody, CardTitle, CardText} from "reactstrap"

const OponentMonster = ({name, attack, defense, picture}) => {


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
                Attack Power : {attack}
            </CardText>
            <CardText>
                Defense Power : {defense}
            </CardText>
        </CardBody>
    </Card>



        </Container>


        
        </>

    )




}

export default OponentMonster