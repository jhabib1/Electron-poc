import * as React from 'react';
import { Form, Icon, Button, Input, Checkbox } from 'antd';
import { Link } from 'react-router';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

const FormItem = Form.Item;

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            rememberMe: false
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
    }

    handleFormSubmit() {
        console.log("do nothing");
       //  this.props.history.push('/events-offline')
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        }, () => console.log(this.state))
    }

    handleCheckBox() {
        this.setState({
            rememberMe: !this.state.rememberMe
        }, () => { })
    }

    render() {
        return (
            <Form onSubmit={this.handleFormSubmit} className="login-form">
                <label className="text-left">Email Address </label>
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" name="username" onChange={(event) => this.handleChange(event)} />
                <label style={{ marginTop: 10 }} className="text-left">Password </label>
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" name="password" onChange={(event) => this.handleChange(event)} />
                <Checkbox style={{ marginTop: 15 }} name="rememberMe" onChange={this.handleCheckBox}> Remember me</Checkbox>
                <Button style={{ width: 370, marginTop: 15, marginBottom: 15 }} type="primary" htmlType="submit" className="login-form-button">
                    <Link to="events-offline">
                        Log in
                    </Link>
                </Button>
                <div className="text-center green">
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <br />
                    <a className="login-form-forgot" href="">Official Website</a>
                </div>
            </Form>
        )
    }
}

const WrappedNormalLoginForm = Form.create()(LoginForm);
export default WrappedNormalLoginForm;

