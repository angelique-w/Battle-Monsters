import React, {useState} from "react";
import {Row, Form,Input, Button, Container, Col} from "reactstrap"

import apiCall from "../components/apiCall"


function NewUser () {

const [userName, setUserName] = useState("")
const [alreadyExists, setAlreadyExists] = useState(false)

const handleChange = (event) => {
    let inputText = event.target.value;
    setUserName(inputText)

}

const handleSubmit = e =>{
    e.preventDefault()
    apiCall.get(`/user/gogetuser/${userName}`)
    .then(res => {
        const id=res.data[0].id;
    if (id) {
        setAlreadyExists(true)
        
    }
    else{
        setAlreadyExists(false)



    }    
    
}
    )
}


return(

    <Container className="m-2">
        
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
                        Log in
                    </Button>
            </Form>
        </Row>
    </Container>


)


}

export default NewUser