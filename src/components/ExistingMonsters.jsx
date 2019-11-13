import React, {Component} from "react"
import {Row} from "reactstrap"

import apiCall from "./apiCall"
import ExistingMonster from "./ExistingMonster";

class ExistingMonsters extends Component{
        constructor(props){
            super(props);
            this.state = {
                monsterList : [],
                error : ""
            }
        }
    componentDidMount(){

        const user = localStorage.getItem('username')
        apiCall.get(`/user/gogetthisone/${user}`)
        .then (res => 
            {
            const list = res.data
            console.log(list)
            this.setState({monsterList : list})
            localStorage.setItem("user_id", list[0].user_id)
            console.log("userid " + localStorage.getItem("user_id"));
            
        })
        .catch(err => {
            this.setState({error : err})

        })


    }
    
    render() 
    {

        const {monsterList, error} = this.state

        return(
            <Row>
            {monsterList.map(monster => {
                return <ExistingMonster {...monster} />}
)}
            </Row>

    )
}
}





export default ExistingMonsters