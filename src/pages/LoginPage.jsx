import React, {Component} from "react";


import UsernameBanner from "../components/UsernameBanner";
import Header from "../components/Header"


class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state ={}
    }
    
    
    render() {
        return (
        <>
            <Header />
            <UsernameBanner />
        </>
        )
    
        
        }}




export default LoginPage