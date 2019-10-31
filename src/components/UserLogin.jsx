import React, {Component} from "react"
import {Row, Form, Input, Button} from "reactstrap"
import {Redirect} from "react-router-dom"


class UsernameBanner extends Component {
    constructor(props){
        super(props);
        this.state ={
            userName : "",
            isLogged : false,
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
            <Redirect to="/select" />

        )


    }
    else {
    return (

        <Row>
            <Form layout="inline" onSubmit={this.handleSubmit}>
        <Input
            placeholder="Username"
            value={this.state.userName}
            onChange={this.handleChange}
            />
        <Button color="primary" htmlType="submit">
            Log in
        </Button>
        </Form>
        </Row>

            

        )
    }
        
        }}







export default UsernameBanner