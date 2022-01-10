import React from 'react';

import { Jumbotron, Button, Col, Container, Form, Input } from 'reactstrap';

export default function Footer(props) {
    return (
        <Col>
            <Jumbotron fluid>
                <Container fluid>
                    <i className='fab fa-react'></i>
                    <h1 className="display-4">Lorem</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                <Form inline>
                    <Input type="type" name="search" placeholder="" className='mr-2' />
                    <Button outline color='primary'>Search</Button>
                </Form>
                
                </Container>
            </Jumbotron>

        </Col>
    );
}