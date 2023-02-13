const user = {
    firstName: `niko`,
    lastName: `Papa`
}

// localStorage.setItem(`user`, JSON.stringify(user));
// localStorage.setItem(`lastName`, `Papaa`);

// localStorage.removeItem(`firstname`);

// localStorage.clear();

const uss = localStorage.getItem(`user`);
console.log(typeof(uss));
console.log(JSON.parse(uss).firstName);