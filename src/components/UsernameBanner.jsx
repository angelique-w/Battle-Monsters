import React, {Component} from "react"
import {Row, Form, Input,Icon} from "antd"

class UsernameBanner extends Component {
    constructor(props){
        super(props);
        this.state ={
            user : "",
            isLogged : false
        }
}



render() {
    return (
        <Row>
            <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item validateStatus={this.usernameError ? 'error' : ''} help={this.usernameError || ''}>
        <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
        </Form.Item>
        </Form>
        </Row>
            

        )
    
        
        }}







export default UsernameBanner