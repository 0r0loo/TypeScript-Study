const printCar = (car: {modelName:string, wheels: number}) => {
    return `${car.modelName} ${car.wheels}`;
}

const result = printCar({modelName :'bmw', wheels: 4});

console.log(result)


export {
    printCar
}