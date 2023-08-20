const car = {
    brand: "Toyota",
    model: "Supra",
    year: 2023
};

console.log(`This is a ${car.year} ${car.brand} ${car.model} car.`);
const isSportCarInput = prompt("Is it a sport car? (true or false)");
const isSportCar = isSportCarInput === "true";
car.isSportCar = isSportCar;
console.log(`Is it a sport car? ${car.isSportCar}`);