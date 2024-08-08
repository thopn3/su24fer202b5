import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
    const [currentAccount, setCurrentAccount] = useState();

    useEffect(()=>{
        if(localStorage.getItem("user")){
            setCurrentAccount(JSON.parse(localStorage.getItem("user")));
        }
    }, []);
    
    return (
        <Row id="header">
            <Col>
                <Container fluid>
                    <Row>
                        <Col style={{textAlign:"right"}}>
                            <ul>
                                {
                                    currentAccount ? <>
                                        <li><Link to={"/profile"}>{currentAccount.fullname}</Link></li>
                                        <li><Link to={"/auth/logout"}>Logout</Link></li>
                                    </> : <>
                                        <li><Link to={"/auth/login"}>Login</Link></li>
                                        <li><Link to={"/auth/register"}>Register</Link></li>
                                    </>
                                }
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to={"/"}>Home</Link>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}