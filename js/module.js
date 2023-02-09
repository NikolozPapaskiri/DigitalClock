export const user = {
    fistName: `Niko`,
    lastName: `Papa`
}

export function userName(name) {
    console.log(name);
}

const car = {
    model: 'Ferrari'
}

export default car;

export class User {
    constructor (name) {
        this.name = name;
    }
}