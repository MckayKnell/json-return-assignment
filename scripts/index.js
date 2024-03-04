//challenge1
requestObject = {
  response: {
    results: [
      {
        uid: "1",
        name: "user1",
        email: "user1@gmail.com",
        password: "user1password",
      },
      {
        uid: "2",
        name: "user2",
        email: "user2@gmail.com",
        password: "user2password",
      },
      {
        uid: "1",
        name: "user2",
        email: "user2@gmail.com",
        password: "user2password",
      },
    ],
  },
};

console.log(
  `hello ${requestObject.response.results[0].name}, your email is ${requestObject.response.results[0].email} `
);

//challenge2

function fetchData() {
  return new Promise((resolve, reject) => {
    responseObj = new XMLHttpRequest();
    responseObj.open("GET", "https://www.swapi.tech/api/planets");
    responseObj.responseType = "json";
    responseObj.send();

    responseObj.onload = () => {
      console.log(responseObj.status);
      if (responseObj.status === 200) {
        resolve(responseObj.response.results);
      } else {
        reject(`unable to fetch data`);
      }
    };
    console.log(responseObj);
  });
}

fetchData()
  .then((result) => {
    console.log(result);
    return result[0];
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
