class User {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

class Student extends User {
    constructor(firstname, lastname, grade) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.grade = grade;
    }
}