import { Col, Container, Row } from "react-bootstrap";

export default function Content() {
    return (
        <Row id="content">
            <Col className="d-none d-sm-block" sm={4} md={2} >Left</Col>
            <Col className="main" sm={8} md={8}>Main</Col>
            <Col className="d-none d-sm-none d-md-block" md={2}>Right</Col>
        </Row>
    )
}