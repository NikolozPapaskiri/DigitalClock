// const sportCars = [`Ferrari`, `Porsche`, `McLaren`];
// const familyCars = [`Tpyota`, `Honda`, `audi`];

// const allCars = [...sportCars, ...familyCars];

// console.log(allCars);

const car = {
    name: `Ferrari`,
    country: `Italy`
};

const features = {
    color: `Red`,
    type: `Hyper car`
};

const fullCar = {
    ...car,
    ...features,
    price: 500000
}

console.log(fullCar);