import axios from 'axios'

export default function makeConnection (){
    return axios.create({
        baseURL: 'http://localhost:3001'
    })
}
