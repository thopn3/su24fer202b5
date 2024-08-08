import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

// Gia lap 1 mang du lieu tu Back-End tra ve
const account = [
    {"id": 1, "email": "user1@gmail.com", "password": "abc@123", "fullname": "Nguyen Hoang Nam"},
    {"id": 2, "email": "user2@gmail.com", "password": "abc@123", "fullname": "Hoang Duc Binh"},
    {"id": 3, "email": "user3@gmail.com", "password": "abc@123", "fullname": "Nguyen Hong Hanh"}
]

export default function Login() {
    // Dinh nghia cac bien de quan ly trang thai du lieu
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msgEmail, setMsgEmail] = useState();
    const [msgPassword, setMsgPassword] = useState();
    const [msgError, setMsgError] = useState("");
    const navigate = useNavigate();

    function handleLogin(){
        let flag = true;
        if(email.length == 0){
            setMsgEmail("Email is not empty");
            flag = false;
        }else{
            setMsgEmail("");
        }

        if(password.length == 0){
            setMsgPassword("Password is not empty");
            flag = false;
        }else{
            setMsgPassword("");
        }

        if(flag == true){
            const existAccount = account.find(a => a.email === email && a.password === password);
            if(!existAccount){
                setMsgError("This account not found!");
            }else{
                const {id, email, fullname} = existAccount;
                // Save into LocalStorage
                localStorage.setItem("user", JSON.stringify({id, email, fullname}));
                // Redirect to TodoItem component
                navigate("/todo");
            }
        }
    }

    return (
        <Row>
            <Col>
                <Container className="auth-form">
                    <Row>
                        <Col>
                            <h3>Login Form</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {
                                msgError && <span style={{color:"red", marginTop:"5px"}}>{msgError}</span>
                            }
                        </Col>
                    </Row>
                    <Row id="content">
                        <Col>
                            <Form style={{margin:"10px auto", width:"60%"}}>
                                <Form.Group>
                                    <Form.Label>Email *</Form.Label>
                                    <Form.Control placeholder="Enter email" 
                                        onChange={e => setEmail(e.target.value)}/>
                                    {
                                        msgEmail && <span style={{color:"red", marginTop:"5px"}}>{msgEmail}</span>
                                    }
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password *</Form.Label>
                                    <Form.Control type="password" placeholder="Enter password"
                                        onChange={e => setPassword(e.target.value)}/>
                                    {
                                        msgPassword && <span style={{color:"red", marginTop:"5px"}}>{msgPassword}</span>
                                    }
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label></Form.Label>
                                    <Button className="btn btn-success"
                                        onClick={()=> handleLogin()}
                                        >Login</Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}