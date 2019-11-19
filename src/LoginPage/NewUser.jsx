import React, {useState} from "react";
import {Row, Form,Input, Button, Container, Col} from "reactstrap"
import {useHistory, Link} from "react-router-dom"

import apiCall from "../components/apiCall"


function NewUser () {

const [userName, setUserName] = useState("")
const [alreadyExists, setAlreadyExists] = useState(false)
const [iscreated, setIsCreated] = useState(true)
const history = useHistory()

const handleChange = (event) => {
    let inputText = event.target.value;
    setUserName(inputText)

}

const handleSubmit = e =>{
    e.preventDefault()

    // checking if the username already exists by retrieving the userid associated

    apiCall.get(`/user/gogetuser/${userName}`)
    .then(res => {
        const id=res.data[0].id;
    if (id) {
        setAlreadyExists(true)
    }
    // if the username doesn't exists, creating a new user
    else{
        setAlreadyExists(false)
        apiCall({ method: "POST", url: '/user/adduser', data:{
            name: userName
        },
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => {
        const userid = res[0];
        localStorage.setItem("userId", userid);
        localStorage.setItem("username", userName);
        setIsCreated(true)
    })
    .catch(err => alert(err))
    }    
})}

return(

    <Container className="m-2">
        
        
        {iscreated ? 
        <Row className="justify-content-center text-warning">
            <Col xs={12} className="text-center text-success">Your account has been duly created.</Col>
            <Col xs={12} className="text-center"><h4>Welcome to the Wild Monsters Battle</h4></Col>
            <Col xs={12} className="text-center">
                    <Button color="warning" onClick={() => history.push("/select")}>Continue to the monsters page, and start the battle</Button>
            </Col>

        </Row> :
        <>
            <Row className="justify-content-center">
                {alreadyExists ? 
                <Row className="justify-content-center m-1 text-danger"> 
                    <h4>This username is already taken. Choose another one and retry</h4>
                </Row> 
                : <Row className="justify-content-center m-1 text-warning" >
                <h4>Choose you username and start playing</h4>
                </Row>}
            </Row>
            <Row className="justify-content-center">
                    <Form layout="inline" onSubmit={handleSubmit}>
                        <Input
                            placeholder="Username"
                            value={userName}
                            onChange={handleChange}
                            required
                            />
                        <Button color="primary" htmlType="submit">
                            Sign Up
                        </Button>
                </Form>
            </Row>
        </>}
    </Container>


)


}

export default NewUser