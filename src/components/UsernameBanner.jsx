import React, {Component} from "react"
import {Row, Container, Button, Col} from "reactstrap"
import {Redirect} from "react-router-dom"

class UsernameBanner extends Component {
    constructor(props){
        super(props);
        this.state ={
            userName : "",
            isLogged : true,
            usernameError : false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleLogOut = this.handleLogOut.bind(this)

}
componentDidMount(){
    const username = localStorage.getItem('username')
    username ? this.setState({isLogged : true}) : this.setState({isLogged : false})
    this.setState({userName : username })

}

handleSubmit(){
    localStorage.setItem("username",this.state.userName)
    this.setState({})

}

handleChange(event){
    let inputText = event.target.value;
    this.setState({userName : inputText})

}

handleLogOut(){
    localStorage.clear()
    this.setState({userName : "", isLogged : false})




}

render() {

    if (this.state.isLogged) {

        return(
            <Container>
                <Row>
                    <Col xs="12 text-center">
                    Your userName {this.state.userName}
                    <br></br>
                    <Button type="primary" onClick={()=> this.handleLogOut()}>
                        Log out
                    </Button>
                    </Col>
                </Row>
            </Container>
        )


    }
    else {
    return (

    <Redirect to="/"/>

        )
    }
        
        }}







export default UsernameBanner