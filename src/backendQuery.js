import {backendLookup, backendAuthentication} from "./lookup/index";
import axios from "axios";




export function apiGetBeats(callback) {
    axios.get('/api/client/beats/').then(r => callback(r.data,r.status))
}

export function apiGetLicense(callback){
    axios.get('/api/client/licenses/').then(r => callback(r.data,r.status))
}

// export function apiBeat(callback,data) {
//     backendLookup("POST", `/api/client/beats/`, callback,data)
// }

// export function apiRequests(callback) {
//     backendLookup("GET", `localhost/api/client/manage-payment/`, callback,
//         )
// }

// export function apiGetRequests(callback,beatId,licenseType) {
//     backendLookup("POST", `http://127.0.0.1:8000/api/client/cart/add/${beatId}/`, callback,
//         {"license_type": licenseType})
// }