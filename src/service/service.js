import api from './api'

export default {
    getAll() {
        return api().get('/')
    },
    getNumByType(targetType){
        return api().post('/', {targetType})
    }
}