import { useState } from "react";
import { uploadData, getUrl, remove } from 'aws-amplify/storage';
import { v4 as uuid } from 'uuid';

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { generateClient } from 'aws-amplify/api';


const API = generateClient();

function AddingAdvert() {
    const [advertData, setAdvertData] = useState({});
    const [photo, setPhoto] = useState("");

    const addNewContact = async () => {
        const { name, address, kvadratura, cena } = advertData;
        const result = await uploadData({path: `public/${uuid()}.png`,data: photo,});
            }
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col><h1>Add adverts</h1></Col>
            </Row>
            <Row className="px-4 my-5">
                <Col sm={6}>
                    <Form>
                        <Form.Group controlId="formFileSm" className="mb-3">
                            <Form.Label>Add Photos</Form.Label>
                            <Form.Control type="file" size="sm" 
                                        onChange={evt => setPhoto(evt.target.files[0])} />
                        </Form.Group>
                        <Form.Group>
                            <h4>opisanie</h4>
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={addNewContact}>Create New</Button>&nbsp;
                    </Form>
                </Col>
            </Row>
        </Container>
    ) 
}

export default AddingAdvert;