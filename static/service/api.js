import axios from 'axios'

export default function makeConnection (){
    return axios.create({
        baseURL: 'http://ec2-3-134-94-92.us-east-2.compute.amazonaws.com:3003'
    })
}
