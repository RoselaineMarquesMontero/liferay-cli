import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
// less recomended, to reduce the amount of code you end up sending to the client.
//import { Button } from 'react-bootstrap';

export default (props) => {
    console.log("Props", props.buttonType);
    return (
        <Container direction="horizontal" gap={ 2 }>
            <Button as="a" variant={ props.buttonType }>
                Button as link
            </Button>
            <Button as="a" variant="success">
                Button as link
            </Button>
        </Container>
    )
}
