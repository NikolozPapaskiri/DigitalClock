let promise = new Promise((resolve, reject) => {
    if (1 < 2){
        resolve('success 1');
        return;
    }
    reject('error 1');
});

let promise2 = new Promise((resolve, reject) => {
    if (1 < 2){
        resolve('success 2');
        return;
    }
    reject('error 2');
});

Promise.all([promise, promise2])
    .then(res => console.log(res))
    .catch(error => console.log(error));