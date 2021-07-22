import axios from "axios";


export function apiGetBeat(callback,title) {
    axios.get('/api/client/beat/',{params:{title:title}}).then(r => callback(r.data,r.status))
}

export function apiGetBeats(callback) {
    axios.get('/api/client/beats/').then(r => callback(r.data,r.status))
}

export function apiGetLicense(callback){
    axios.get('/api/client/licenses/').then(r => callback(r.data,r.status))
}

