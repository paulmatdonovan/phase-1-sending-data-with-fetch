// Add your code here
// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle",
//     }),
// };

// fetch("http://localhost:3000/dogs", configurationObject);

function submitData(name, email) {
    const postData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    };

    return fetch("http://localhost:3000/users", postData)
        .then(function (response) {
            return response.json();
        })


        .then(function (object) {
            document.body.innerHTML = object["id"]
        })
        .catch(function (message) {
            document.body.innerHTML = message;
            // console.log(error.message);
        });
}
submitData()