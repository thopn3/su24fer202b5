import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Row id="header">
            <Col>
                <Container fluid>
                    <Row>
                        <Col style={{textAlign:"right"}}>
                            <ul>
                                <li><Link to={"/auth/login"}>Login</Link></li>
                                <li><Link to={"/auth/register"}>Register</Link></li>
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