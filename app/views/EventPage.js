import * as React from 'react';
import { Input } from 'antd';
import { Link } from 'react-router'
import { Table, Divider, Tag, Radio, Button } from 'antd';


export default class EventPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'a'
        }
    }

    handleRadioClick(e) {
        this.setState({
            value: e.target.value
        }, () => { console.log(this.state) })
    }

    render() {
        return (
            <div className="container-large">
                <h1>Event Name </h1>
                <Radio.Group onChange={(event) => this.handleRadioClick(event)} defaultValue="a" buttonStyle="solid">
                    <Radio.Button value="a">Members</Radio.Button>
                    <Radio.Button value="b">Attendees</Radio.Button>
                </Radio.Group>
                {this.state.value == "a" ? (
                    <Table columns={columns} dataSource={data} />
                ) : (
                        <Table columns={columns} dataSource={dataTwo} />
                    )}
                <Button style={{ width: 370, marginTop: 15, marginBottom: 15 }} type="primary" htmlType="submit" className="login-form-button">
                    <Link to="/">
                        Home
                    </Link>
                </Button>
                <br />
                <Button style={{ width: 370, marginTop: 15, marginBottom: 15 }} type="primary" htmlType="submit" className="login-form-button">
                    <Link to="events-offline">
                        Events
                    </Link>
                </Button>
            </div>
        )
    }
}




const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: 'Checked In',
    dataIndex: 'checkedIn',
    key: 'checkedIn',
}, {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
}
    // {
    //     title: 'Action',
    //     key: 'action',
    //     render: (text, record) => (
    //         <span>
    //             <a href="javascript:;">Invite {record.name}</a>
    //             <Divider type="vertical" />
    //             <a href="javascript:;">Delete</a>
    //         </span>
    //     ),
    // }
];

const data = [{
    key: '1',
    name: 'Joseph Habib',
    checkedIn: 'Yes',
    phoneNumber: '04325678',
}, {
    key: '2',
    name: 'Joshua Somma',
    checkedIn: "Yes",
    phoneNumber: '04325678',
},
{
    key: '3',
    name: 'Som Som',
    checkedIn: "Yes",
    phoneNumber: '04325678',
},
{
    key: '4',
    name: 'Alex Tran',
    checkedIn: "Yes",
    phoneNumber: '04325678',
}];

const dataTwo = [{
    key: '1',
    name: 'Joseph Habib',
    checkedIn: 'Yes',
    phoneNumber: '04325678',
}, {
    key: '2',
    name: 'Joshua Somma',
    checkedIn: "Yes",
    phoneNumber: '04325678',
},
{
    key: '3',
    name: 'Som Som',
    checkedIn: "Yes",
    phoneNumber: '04325678',
},
{
    key: '4',
    name: 'Alex Tran',
    checkedIn: "Yes",
    phoneNumber: '04325678',
}].reverse();