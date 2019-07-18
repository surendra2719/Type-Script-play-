// / ** *
// -- -- -- -- -- --API call from services-- -- -- -- --
// /

// function doTask(params, state) {
//   return new Promise((resolve, reject) => {
//     let authentication = {
//       url: "",
//       headers: {

//       },
//       "method": "post/get"
//     }
//     try {
//       axios(authentication).then((response) => {
//         resolve\({
//           "response": response
//         })
//       });
//     } catch (error) {
//       resolve({
//         "response": error
//       });
//     }
//   });
// }

// / ** *
// -- -- -- -- -- --API call from handlers-- -- -- -- --
// /

// function doTask(params, state) {
//   return new Promise((resolve, reject) => {
//     if (params.response) {
//       resolve({
//         "response": params.response
//       })
//     } else if (params.error) {
//       resolve({
//         "response": null
//       })
//     }
//   })
// }