import { Col, Container, Row } from "react-bootstrap";

const todos = [
    {"id": 1, "title": "Homework - FER202", "start": "2024-08-08", "end": "2024-08-09", "type": 1, "status": false},
];
const todotypes = [
    {"id": 1, "name": "Learning"},
    {"id": 2, "name": "Work"},
];


export default function TodoItem() {
    return (
        <Row id="footer">
            <Col>TodoItems data</Col>
        </Row>
    )
}