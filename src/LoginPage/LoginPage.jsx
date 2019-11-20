import React, {Component} from "react";
import {Row, Col} from "reactstrap"


import Header from "../components/Header"
import LoginSelect from "./LoginSelect"
import LoginCarousel from "./LoginCarousel";

import "./loginpage.css"
import BetaForm from "./BetaForm";

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state ={}
    }
    
    
    render() {
        return (
        <>
                <Header />
                <Row className="loginPageBody">
                    <Col xs={8} className="offset-2">
                        <LoginSelect />
                        <LoginCarousel />
                    </Col>
                    <Col xs={2}>
                        <BetaForm />
                    </Col>
                    
                </Row>
        </>
        )
    
        
        }}




export default LoginPage