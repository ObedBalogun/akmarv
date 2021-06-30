// import $ from 'jquery';
//
//
// function getCookie(name) {
//             var cookieValue = null;
//             if (document.cookie && document.cookie !== '') {
//                 var cookies = document.cookie.split(';');
//                 for (var i = 0; i < cookies.length; i++) {
//                     var cookie = cookies[i].trim();
//                     // Does this cookie string begin with the name we want?
//                     if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                         break;
//                     }
//                 }
//             }
//             return cookieValue;
//         }
//
// export function backendLookup(method, endpoint, callback, data) {
//     let jsonData;
//
//     const csrftoken = getCookie('csrftoken');
//
//     function csrfSafeMethod(method) {
//         return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method))
//     }
//
//
//     if (data) {
//         jsonData = JSON.stringify(data)
//     }
//     if (method === 'GET') {
//         $.ajaxSetup({
//             beforeSend: function (xhr, settings) {
//                 if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
//                     xhr.setRequestHeader("X-CSRFToken", csrftoken)
//                 }
//             }
//         })
//
//         $.ajax({
//             url: endpoint,
//             data: data,
//             type: method,
//             dataType: "json",
//             success: function (xhr) {
//                 callback(xhr.data, xhr.status)
//             },
//             error: function (e) {
//                 console.log(e)
//                 callback({"message": "The request was an error"}, 400)
//             }
//
//         });
//
//     }
//     if (method === 'POST'){
//         $.ajaxSetup({
//             beforeSend: function (xhr, settings) {
//                 if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
//                     xhr.setRequestHeader("X-CSRFToken", csrftoken)
//                 }
//             }
//         })
//
//         $.ajax({
//             url: endpoint,
//             data: data,
//             type: method,
//             dataType: "json",
//             success: function (xhr){
//                 callback(xhr.data, xhr.status)
//                 console.log(xhr.status)
//             },
//             error: function (e) {
//                 console.log(e)
//                 callback({"message": "The request was an error"}, 400)
//             }
//
//         });
//
//     }
// }
//
// export function backendAuthentication(method, endpoint, callback, data){
//
//     const csrftoken = getCookie('csrftoken');
//
//     function csrfSafeMethod(method) {
//         return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method))
//     }
//     $.ajaxSetup({
//         beforeSend: function (xhr, settings) {
//             if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
//                 xhr.setRequestHeader("X-CSRFToken", csrftoken)
//             }
//         }
//     })
//
//     $.ajax({
//         url: endpoint,
//         data: data,
//         type: method,
//         dataType: "json",
//         success: function (xhr) {
//             callback(xhr)
//         },
//         error: function (e) {
//             console.log(e)
//             callback({"message": "The request was an error"}, 400)
//         }
//
//     });
//
//
// }
//
//
//
