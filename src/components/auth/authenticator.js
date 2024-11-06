import { Col, Container, Row } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import '@aws-amplify/ui-react/styles.css'

function AuthenticationPage () {
    return (
        <Authenticator loginMechanism={['email']}>
            {({ signOut, user }) => (
            <Container>
                <h1>hi</h1>
            </Container>
            ) }
        </Authenticator> 
    )}

export default AuthenticationPage;