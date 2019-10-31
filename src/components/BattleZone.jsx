import React, { Component } from "react"
import { Container, Row, Col, Button } from "reactstrap"

import apiCall from "./apiCall"
import UserMonster from "../components/UserMonster"
import OponentMonster from "../components/OponentMonster"
import BattleDisplay from "../components/BattleDisplay"

const sleep = (ms) => {
    // Temporise par le temps passé en argument
    const start = new Date().getTime() // Snapshot of the time
    for (let i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > ms) {
            break;
        }
    }
}


class Battlezone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            userMonster: {},
            oponentMonster: {},

            feedMessages: [],

            isBattleStarted: false,
            isPlaying: false
        }
        this.handleAttack = this.handleAttack.bind(this)
    }

    componentDidMount() {
        const user = localStorage.getItem('username');
        apiCall.get(`/user/gogetthisone/${user}`)
            .then(res => {
                const monsters = res.data
                const monster = monsters.filter(monster => {
                    const id = localStorage.getItem('monsterID')
                    return monster.id === id
                });
                this.setState({ userMonster: monster[0] })
                console.log(this.state.userMonster)
            })
        apiCall.get(`/item/gogetit`)
            .then(res => {
                const monsters = res.data
                const randomindex = Math.floor(Math.random() * monsters.length)
                this.setState({ oponentMonster: monsters[randomindex] })
            })
    }

    async handleAttack(nb) {
        let attackDatas = {}
        switch (nb) {
            case 1:
                attackDatas = { attackName: this.state.userMonster.attk1_name, attackValue: Number(this.state.userMonster.attk1_value) }
                break;
            case 2:
                attackDatas = { attackName: this.state.userMonster.attk2_name, attackValue: Number(this.state.userMonster.attk2_value) }
                break;
            case 3:
                attackDatas = { attackName: this.state.userMonster.attk3_name, attackValue: Number(this.state.userMonster.attk3_value) }
                break;
            default:
                return;
                
        }

        const attackMessage = `${this.state.userMonster.name} is attacking ${this.state.oponentMonster.name} with ${attackDatas.attackName}, dealing ${attackDatas.attackValue} damages !`;
        const newHP = (this.state.oponentMonster.defense - attackDatas.attackValue)

        await this.setState({ feedMessages: [...this.state.feedMessages, attackMessage] })
        console.log(this.state.feedMessages);
        console.log(attackMessage)

        this.setState({ oponentMonster: { ...this.state.oponentMonster, defense: newHP } })


        sleep(2000)

        const oppNb = Math.floor(Math.random() * 3) + 1

        let oppDatas = {}

        switch (oppNb) {
            case 1:
                oppDatas = { attackName: this.state.oponentMonster.attk1_name, attackValue: Number(this.state.oponentMonster.attk1_value) }
                break;
            case 2:
                oppDatas = { attackName: this.state.oponentMonster.attk2_name, attackValue: Number(this.state.oponentMonster.attk2_value) }
                break;
            case 3:
                oppDatas = { attackName: this.state.oponentMonster.attk3_name, attackValue: Number(this.state.oponentMonster.attk3_value) }

            default:
                break;
        }

        console.log(oppNb)

        const oppMessage = `${this.state.oponentMonster.name} is attacking ${this.state.userMonster.name} with ${oppDatas.name}, dealing ${oppDatas.attackValue} damages !`;
        const newOppHP = (this.state.userMonster.defense - oppDatas.attackValue)


        this.setState({ feedMessages: [...this.state.feedMessages, oppMessage] })
        this.setState({ userMonster: { ...this.state.userMonster, defense: newOppHP } })



    }



    render() {
        const { userMonster, oponentMonster, feedMessages, isBattleStarted } = this.state

        return (
            <React.Fragment>

                <Container>
                    <Row>
                        <Col>
                            <UserMonster {...userMonster} />
                        </Col>
                        <Col className="align-self-center">
                            <BattleDisplay messages={feedMessages} />
                        </Col>
                        <Col>
                            <OponentMonster {...oponentMonster} />
                        </Col>

                    </Row>
                    <Row className="justify-content-center">

                        {isBattleStarted ? <Row>
                            <Button onClick={() => this.handleAttack(1)}>{userMonster.attk1_name}</Button>
                            <Button onClick={() => this.handleAttack(2)}>onClick{userMonster.attk2_name}</Button>
                            <Button onClick={() => this.handleAttack(3)}>{userMonster.attk3_name}</Button>
                        </Row> :
                            <Button color="danger" onClick={() => this.setState({ isBattleStarted: true })}>Start Battle !</Button>}
                    </Row>



                </Container>

            </React.Fragment>
        )

    }




}

export default Battlezone