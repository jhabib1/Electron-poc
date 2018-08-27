import * as React from 'react';
import { Spinner } from "../components/Spinner"
import { Input } from 'antd';
import { List, Avatar, Button, Spin } from 'antd';
import reqwest from 'reqwest'
import 'antd/dist/antd.css';

const Search = Input.Search;

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

export default class EventsPageOffline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            loading: true,
            loadingMore: false,
            showLoadingMore: true,
            data: [],
        }

        this.getData = this.getData.bind(this);
        this.onLoadMore = this.onLoadMore.bind(this);
    }

    getData(callback) {
        reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: (res) => {
                callback(res);
            },
        });
    }

    // componentWillMount() {
    //     setInterval(this.setState({
    //         isLoading: false
    //     }), 5000)
    // }

    onLoadMore() {
        this.setState({
            loadingMore: true,
        });
        this.getData((res) => {
            const data = this.state.data.concat(res.results);
            this.setState({
                data,
                loadingMore: false,
            }, () => {
                // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
                // In real scene, you can using public method of react-virtualized:
                // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
                window.dispatchEvent(new Event('resize'));
            });
        });
    }

    componentDidMount() {
        this.getData((res) => {
            this.setState({
                loading: false,
                data: res.results,
            });
        });
    }

    render() {
        const { isLoading } = this.state;
        const { loading, loadingMore, showLoadingMore, data } = this.state;
        const loadMore = showLoadingMore ? (
            <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
                {loadingMore && <Spin />}
                {!loadingMore && <Button onClick={this.onLoadMore}>loading more</Button>}
            </div>
        ) : null;
        return (
            <div className="container-large center">

                {isLoading ? (
                    <Spinner />
                ) :
                    <div className="container center">
                        <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            enterButton
                        />
                        <List
                            className="demo-loadmore-list"
                            loading={loading}
                            itemLayout="horizontal"
                            loadMore={loadMore}
                            dataSource={data}
                            renderItem={item => (
                                <List.Item actions={[<a>edit</a>, <a>more</a>]}>
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title={<a href="https://ant.design">{item.name.last}</a>}
                                        // description="Just need to fill this with something"
                                    />
                                    <div>content</div>
                                </List.Item>
                            )}
                        />
                    </div>}
            </div>
        )
    }
}