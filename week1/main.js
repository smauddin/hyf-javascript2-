/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with car objects with random color and speed
 * @param {integer} numberOfCars - The number of cars 
 * @returns {array} Array containing the car objects
 */
function generateCars(numberOfCars) {
    const cars = [];

    const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo'];
    const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];
    
    for (let i = 0; i < numberOfCars; i++) {
        const car = {};
        const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
        const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

        car.make = carMakes[randomMakeIndex];
        car.color = carColors[randomColorIndex];
        car.speed = randomIntFromInterval(0, 100);

        cars.push(car);
    }

    return cars;
}

// Generate Random Cars

console.log('Generate Random Cars: ')
console.log(generateCars(10));


const allCars = generateCars(10);

function getSpeedOfCar(car) {
	return car.speed 
}

function getMakeOfCar(car) {
	return car.make;
}

// Cars with speeds between 30 and 60
const speedCars = allCars.filter(allCars => allCars.speed >= 30 && allCars.speed <=60);

console.log('Cars with speeds between 30 and 60: ');
console.log(speedCars);



// Cars that are not lightyellow
const notYellowCar = allCars.filter(allCars => allCars.color !== 'lightyellow').map(getMakeOfCar) ;
console.log('cars that are not lightyellow: ')
console.log(notYellowCar);

// Change the cars array so it can be read by a danish person

function convertToDanish (car) {
    return {
        maerke: car.make,
        farve: car.color,
        fart: car.speed
    }
}

const convertForDanishPerson = allCars.map(convertToDanish);
console.log('change the cars array so it can be read by a danish person: ');
console.log(convertForDanishPerson);







