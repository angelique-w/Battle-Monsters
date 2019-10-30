import React, {Component} from "react"

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
        apiCall.get("/gogetit")
        .then (res => 
            {
            const list = res.data
            this.setState({monsterList : list})
        })
        .catch(err => {
            this.setState({error : err})

        })


    }
    
    render() 
    {

        const {monsterList, error} = this.state

        return(
            <div>
            {monsterList.map(monster => {
                return <ExistingMonster {...monster} />}
)}
            </div>

    )
}
}





export default ExistingMonsters