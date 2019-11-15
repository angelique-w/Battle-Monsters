import React, {useState} from "react";
import {Row, Form,Input, Button, Container} from "reactstrap"


function NewUser () {

const [userName, setUserName] = useState("")

const handleChange = (event) => {
    let inputText = event.target.value;
    setUserName(inputText)

}

const handleSubmit = e =>{
    e.preventDefault()
    if (userName ===""){
        alert("no username")
    console.log(userName)  
    } 
    

}


return(

    <Container className="m-2">
        <Row className="justify-content-center m-1 text-warning" >
            <h4>Choose you username and start playing</h4>
        </Row>
        <Row className="justify-content-center">
                <Form layout="inline" onSubmit={handleSubmit}>
                    <Input
                        placeholder="Username"
                        value={userName}
                        onChange={handleChange}
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