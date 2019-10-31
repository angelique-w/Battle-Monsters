import React, {Component} from "react"
import {Container, Row, Col, Button} from "reactstrap"

import apiCall from "./apiCall"
import UserMonster from "../components/UserMonster"
import OponentMonster from "../components/OponentMonster"
import BattleDisplay from "../components/BattleDisplay"


class Battlezone extends Component {
        constructor(props){
            super(props);
            this.state={
                username : "",
                userMonster : {},
                oponentMonster : {},
                toDisplay : {
                    message :"Ready for Battle"
            },
                isBattleStarted : false
        }}

    componentDidMount(){
        const user = localStorage.getItem('username');

        apiCall.get(`/user/gogetthisone/${user}`)
        .then(res => { 
            const monsters = res.data
            const monster = monsters.filter( monster => {
                const id = localStorage.getItem('monsterID')
                return monster.id === id                   
                });
            this.setState({userMonster : monster[0]})
            console.log(this.state.userMonster)        
        })
    
        apiCall.get(`/item/gogetit`)
        .then (res => {
            const monsters = res.data
            const randomindex = Math.floor(Math.random()*monsters.length)
            this.setState({oponentMonster : monsters[randomindex]})

        })
    
    
    
    }

render() {
    const {userMonster, oponentMonster, toDisplay, isBattleStarted} = this.state

    return(
        <React.Fragment>

            <Container>
                <Row>
                    <Col>
                        <UserMonster {...userMonster}/>
                    </Col>
                    <Col>
                        <BattleDisplay {...toDisplay} />
                    </Col>
                    <Col>
                        <OponentMonster {...oponentMonster}/>
                    </Col>
                
                </Row>
                <Row>
                    <Col>
                    {isBattleStarted ? <p>battle started</p> :  <Button color="danger" onClick={()=> this.setState({isBattleStarted : true})}>Start Battle !</Button> }

                    </Col>


                </Row>



            </Container>

        </React.Fragment>
)

}




}

export default Battlezone