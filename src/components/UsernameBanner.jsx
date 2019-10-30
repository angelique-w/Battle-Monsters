import React, {Component} from "react"
import {Row, Form, Input,Icon, Button} from "antd"

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
            <Row>
            Your userName {this.state.userName}
            <Button type="primary" onClick={()=> this.handleLogOut()}>
            Log out
            </Button>
            </Row>

        )


    }
    else {
    return (

        <Row>
            <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item validateStatus={this.usernameError ? 'error' : ''} help={this.usernameError || ''}>
        <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              value={this.state.userName}
              onChange={this.handleChange}
            />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
        </Form>
        </Row>
            

        )
    }
        
        }}







export default UsernameBanner