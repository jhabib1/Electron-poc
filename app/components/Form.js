import * as React from 'react';
import { Form, Icon, Button, Input, Checkbox } from 'antd';
import { Link } from 'react-router';

const FormItem = Form.Item;

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit() {
        console.log("do nothing");
    }

    render() {
        return (
            <Form onSubmit={this.handleFormSubmit} className="login-form">
                <FormItem>
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                </FormItem>
                <FormItem>
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                </FormItem>
                <FormItem>
                    <Checkbox>Remember me</Checkbox>
                    <Link className="login-form-forgot" href="">Forgot password</Link>
                    <Button type type="primary" className="login-form-button">
                        <Button buttonSize="large" type="primary"> Login </Button>
              </Button>
                    Or <Link to="">register now!</Link>
                </FormItem>
            </Form>
        )
    }
}

const WrappedNormalLoginForm = Form.create()(LoginForm);
export default WrappedNormalLoginForm;

