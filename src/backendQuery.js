import axios from "axios";


export function apiGetBeat(callback,beat_id) {
    axios.get(`/api/client/beat/${beat_id}/`,{params:{beat_id:beat_id}}).then(r => callback(r.data,r.status))
}

export function apiGetBeats(callback) {
    axios.get('/api/client/beats/').then(r => callback(r.data,r.status))
}

export function apiGetLicense(callback){
    axios.get('/api/client/licenses/').then(r => callback(r.data,r.status))
}

