import Axios from 'axios';

const Api = {
    testDatabase: (catName) => Axios.post(`/testDatabase`, {
        cat: catName
    })
};

export default Api;
