const getUsers = async () => {
    try {
        const ul = document.querySelector('ul');
        const users = await fetch('../db/users.json').then(_ => _.json())
        
        users.forEach(user => {
            const li = document.createElement('li');
            li.innerText = `${user.firstName} ${user.lastname}`;
            ul.appendChild(li);
        });
    } catch (error) {
        console.log(error);
    }
} 

getUsers();