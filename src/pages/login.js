import React from 'react';
import Menu from '../components/Menu'

import './form.css'

import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

const login = () => {
    return (
        <Col md='9'>
            <Menu></Menu>
            <Form className='form-login'>
                <FormGroup>
                    <Label for="username">Tài khoản</Label>
                    <Input type="username" name="username" id="username" placeholder="Nhập tên tài khoản" />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Nhập mật khẩu" />
                </FormGroup>
                <Button>Đăng nhập</Button>
            </Form>
        </Col>
    );
}

export default login;
