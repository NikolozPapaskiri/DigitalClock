class User {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

class Student extends User {
    constructor(firstname, lastname, grade) {
        super(firstname, lastname);
        this.grade = grade;
    }
}

const niko = new User('niko', 'papa');
const test = new Student('niko', 'papa', 23);

console.log(niko);
console.log(test);