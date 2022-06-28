// Add your code here
const userData = { name: "Steve", email: "steve@steve.com" };
const submitData = function () {
  return fetch("http://localhost:3000/users", configurationObject)
    .then((response) => {
      return response.json();
    })
    .then((returnData) => {
      return returnData;
    })
    .catch(function (error) {
      alert("Bad things!");
      console.log(error.message);
    });
};

const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(userData),
};

// function renderUsers(users) {
//   const body = document.querySelector("body");
//   users.forEach((user) => {
//     const h2 = document.createElement("h2");
//     h2.innerHTML = user.name;
//     body.appendChild(h2);
//   });
// }
document.addEventListener("DOMContentLoaded", function () {
  submitData();
});
