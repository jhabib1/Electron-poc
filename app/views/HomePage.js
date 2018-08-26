import * as React from 'react';
import { List, Avatar, Button, Spin, DatePicker } from 'antd';

class LoadMoreList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            loadingMore: false,
            showLoadingMore: true,
            data: [],
        }
    }

    render() {
        return (
            <div>
                <DatePicker />
                </div>
        );
    }
}