let data = new Promise((resolve, reject) => {
    const users = [`niko`, `valo`, `giga`];

    if( true ) {
        resolve(users);
        return;
    }
    reject(`There are errors`);
});

const printUser = async () => {
    try {
        const result = await data;
        console.log(result);
    } catch (error) {        
        console.log(error);
    }
}

printUser();

// data.then(res => console.log(res)).catch(error => console.log(error));