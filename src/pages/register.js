import React from 'react';
import Menu from '../components/Menu'
import './form.css'

import {Col, Form, FormGroup, Label, Input, Button  } from 'reactstrap'

const register = () => {
    return (
        <Col md='9'>
            <Menu></Menu>
            <Form className='form-register'>
                <FormGroup>
                    <Label for="username">Tài khoản</Label>
                    <Input type="username" name="username" id="username" placeholder="Nhập tên tài khoản" />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Mật khẩu</Label>
                    <Input type="password" name="password" id="password" placeholder="Nhập mật khẩu" />
                </FormGroup>
                <FormGroup>
                    <Label for="password2">Nhập lại mật khẩu</Label>
                    <Input type="password2" name="password2" id="password2" placeholder="Nhập lại mật khẩu" />
                </FormGroup>
                <Button>Đăng kí</Button>
            </Form>
        </Col>
    );
}

export default register;
