import  Container  from "react-bootstrap/Container";
import  Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button";

function HomePage() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col xs={4} sm={6}>
                    <Image
                        src="/img/IconLogo-500x500.png"
                        fluid
                        width="40%" />
                </Col>
                <Col sm={6}>
                    <h1 className="front-weight-light">The making</h1>
                    <p className="mt-4">
                        Lorem Ipsum
                        <br /><br />
                        Loren Ispum dolor sit amet consenctuetur adispcising elit sed dor eisumdo
                    </p>
                    <Button variant="outline-primary" href="/adverts">Check adverts&gt;&gt;</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage;