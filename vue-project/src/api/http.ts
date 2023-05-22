import axios from "axios";

const $http: any = axios.create({
    headers: {
        accept: 'application/json'
    }
})

export default $http