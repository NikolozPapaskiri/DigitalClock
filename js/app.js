class Car {
    constructor(brand, model, color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }
}

const myCar = new Car(`Subaru`, `Legacy`, `Blsck`);
const yourCar = new Car(`Mercedes`, `E-class`, `White`);

console.log(yourCar)
console.log(myCar);