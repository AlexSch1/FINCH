// import axios from 'axios';

// function fetcheSave(result) {
//     let counterRespons = 0;

//     function fetcheGo(dataResult) {
//         axios.post('/url', {
//             selectedNumber: result,
//         })
//             .then(function (response) {
//                 if ((response.status !== 200)) {
//                     throw new Error("Not 200 response")
//                 } else {
//                     return response.data
//                 }
//             })
//             .then((data) => {
//                 // 
//             })
//             .catch(function (error) {
//                 if (counterRespons >= 2) {
//                     return;
//                 }
//                 setTimeout(() => {
//                     counterRespons++;
//                     fatcheSave(result);
//                 }, 2000);
//             });
//     }

// }

// export { fatcheSave }