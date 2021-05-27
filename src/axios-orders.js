import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.coincap.io/'
})

export default instance;