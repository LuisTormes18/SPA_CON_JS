export const ajax = async (url, options, callback) => {
  try {
    let response;
    if (options) {
      response = await fetch(url, options);
    } else {
      response = await fetch(url);
    }
    const data = await response.json();

    return callback(data);
  } catch (err) {
    return callback(err);
  }
};

// ajax(URL, {}, (res) => {
//     console.log(res);
//   });
//   let body = {
//     username: "fdbdbdbdh@fnnf",
//     password: "7677435766",
//   };
//   ajax(
//     LOGIN_USER,
//     {
//       method: "post",
//       header: [ "Content-Type", "application/json" ],
//       body,
//     },
//     (res) => {
//       console.log(res);
//     }
//   );
