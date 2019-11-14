import React, {Component} from "react"
import {Row} from "reactstrap"

import apiCall from "./apiCall"
import ExistingMonster from "./ExistingMonster";

class ExistingMonsters extends Component{
        constructor(props){
            super(props);
            this.state = {
                monsterList : [],
                error : "",
                userHasMonster : false
            }
        }
    componentDidMount(){

        const user = localStorage.getItem('username')
        apiCall.get(`/user/gogetthisone/${user}`)
        .then (res => 
            {
            const list = res.data
            const hasMonsters = (list[0].id !== null)
            console.log("hasMonsters " +  hasMonsters);
            console.log(list)
            this.setState({monsterList : list,
                            userHasMonster : hasMonsters})
            
            localStorage.setItem("user_id", list[0].user_id)
            console.log("userid " + localStorage.getItem("user_id"));
            
        })
        .catch(err => {
            this.setState({error : err})

        })


    }
    
    render() 
    {

        const {monsterList, error, userHasMonster} = this.state
        console.log("monsterlist 0 name " + monsterList[0]);
        console.log("render hasmonster" + {userHasMonster});
        

if (userHasMonster){

    return(
        <Row>
            {monsterList.map(monster => {
                return <ExistingMonster {...monster} />}
)}
            </Row>
    )

}
else {
        return(
            <Row className="text-center text-white col xs-12">

            <h4 className="text-center text-white col xs-12">You don't have any monster yet, please create one</h4>
            
            </Row>
    )
    }
}
}





export default ExistingMonsters