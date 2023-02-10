fetch('../db/users.json')
    .then(response => response.json)
    .then(res => console.log(res))
    .catch(error => console.log(error));
