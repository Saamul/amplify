import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Adverts() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col><h1>Adverts</h1></Col>
            </Row>
            <Row>
                <Col className="px-2 my-2">
                    <Card style={{ width: '12rem' }}>
                    <Card.Img   src="/img/place1.jpg"
                                variant="top" />
                    <Card.Body>
                        <Card.Title>malinova dolina</Card.Title>
                        <Card.Text>
                            malinova dolina 1
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col className="px-2 my-2">
                    <Card style={{ width: '12rem' }}>
                    <Card.Img   src="/img/place3.jpg"
                                variant="top" />
                    <Card.Body>
                        <Card.Title>strelbishte</Card.Title>
                        <Card.Text>
                            strelbishte
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col className="px-2 my-2">
                    <Card style={{ width: '12rem' }}>
                    <Card.Img   src="/img/place2.jpg"
                                variant="top" />
                    <Card.Body>
                        <Card.Title>liulin</Card.Title>
                        <Card.Text>
                            liulin
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col className="px-2 my-2">
                        <Button variant="primary" type="button" href="/newAdvert">Create New</Button>&nbsp;
                </Col>
                {/* <Col className="px-2 my-2">
                <Form>
                        <Form.Group controlId="formFileSm" className="mb-3">
                            <Form.Label>Add Photos</Form.Label>
                            <Form.Control type="file" size="sm" />
                        </Form.Group>
                        <Button variant="primary" type="button" >Create New</Button>&nbsp;
                    </Form>
                </Col> */}
            </Row>
        </Container>
    )
}

export default Adverts;