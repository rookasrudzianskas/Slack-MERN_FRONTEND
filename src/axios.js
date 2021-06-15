import axios from "axios";

const instance = axios.create({
    baseURL: 'https://rookas-slack-backend-mern.herokuapp.com'
})

export default instance;