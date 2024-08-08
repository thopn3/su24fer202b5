import { Col, Container, Row } from "react-bootstrap"
import "./Layout.css";
function App() {
  return (
    <Container id="wrapper">
      <Row id="header">
        <Col>Header content</Col>
      </Row>
      <Row id="content">
        <Col className="d-none d-sm-block" sm={4} md={2} >Left</Col>
        <Col className="main" sm={8} md={8}>Main</Col>
        <Col className="d-none d-sm-none d-md-block" md={2}>Right</Col>
      </Row>
      <Row id="footer">
        <Col>Footer content</Col>
      </Row>
    </Container>
  );
}

export default App;
