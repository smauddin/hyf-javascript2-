// This Part is to Identify the Moduel's Names and Its Properties
// Step 4 Home Work


const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(xhttp.responseText);
      const repos = response.allRepo;
      let output = '';
      for (let i = 0; i < repos.length; i ++){

         if ( repos[i].name === 'HTML-CSS' || repos[i].name === 'Node.js' || repos[i].name === 'databases' || repos[i].name === 'JavaScript1' || repos[i].name === 'Project' || repos[i].name === 'masterclass-react-redux' || repos[i].name === 'CommandLine' ||  repos[i].name === 'React' ||  repos[i].name === 'Git' ) 
        {
          output += '<li>'+ '<strong>' + repos[i].name + '</strong>' + '</li>'
        }

        console.log('Name of the 3rd Repository is: ' + repos[2].name);

        // RIGHT Column Display on HTML
        // Project Section Properites with information

        if (repos[i].name === 'Project'){
          let message = '';
          message += '<li>' + 'Forks: ' + repos[i].forks_count + '</li>' + '<li>' + 'Stargazers: ' + repos[i].stargazers_count + '</li>' + '<li>' + 'Language: ' + repos[i].language + '</li>' + '<li>' + 'Watchers: ' + repos[i].watchers_count + '</li>';
          document.getElementById('projects').innerHTML = message;
        }

        // HTML-CSS Section Properites with information

        if (repos[i].name === 'HTML-CSS') {
          let message = '';
          message += '<li>' + 'Forks: ' + repos[i].forks_count + '</li>' + '<li>' + 'Stargazers: ' + repos[i].stargazers_count + '</li>' + '<li>' + 'Language: ' + repos[i].language + '</li>' + '<li>' + 'Watchers: ' + repos[i].watchers_count + '</li>';
          document.getElementById('htmlCss').innerHTML = message;
        }

        // Node.js Section Properties with information
        if (repos[i].name === 'Node.js') {
          let message = '';
          message += '<li>' + 'Forks: ' + repos[i].forks_count + '</li>' + '<li>' + 'Stargazers: ' + repos[i].stargazers_count + '</li>' + '<li>' + 'Language: ' + repos[i].language + '</li>' + '<li>' + 'Watchers: ' + repos[i].watchers_count + '</li>';
          document.getElementById('node').innerHTML = message;
        }

        // Database section with information
        if (repos[i].name === 'databases') {
          let message = '';
          message += '<li>' + 'Forks: ' + repos[i].forks_count + '</li>' + '<li>' + 'Stargazers: ' + repos[i].stargazers_count + '</li>' + '<li>' + 'Language: ' + repos[i].language + '</li>' + '<li>' + 'Watchers: ' + repos[i].watchers_count + '</li>';
          document.getElementById('database').innerHTML = message;
        }

          // JavaScript section with information
          if (repos[i].name === 'JavaScript1') {
            let message = '';
            message += '<li>' + 'Forks: ' + repos[i].forks_count + '</li>' + '<li>' + 'Stargazers: ' + repos[i].stargazers_count + '</li>' + '<li>' + 'Language: ' + repos[i].language + '</li>' + '<li>' + 'Watchers: ' + repos[i].watchers_count + '</li>';
            document.getElementById('JavaScript').innerHTML = message;
          }

           // GIT section with information
           if (repos[i].name === 'Git') {
            let message = '';
            message += '<li>' + 'Forks: ' + repos[i].forks_count + '</li>' + '<li>' + 'Stargazers: ' + repos[i].stargazers_count + '</li>' + '<li>' + 'Language: ' + repos[i].language + '</li>' + '<li>' + 'Watchers: ' + repos[i].watchers_count + '</li>';
            document.getElementById('git').innerHTML = message;
          }

            // Command Line section with information
            if (repos[i].name === 'CommandLine') {
              let message = '';
              message += '<li>' + 'Forks: ' + repos[i].forks_count + '</li>' + '<li>' + 'Stargazers: ' + repos[i].stargazers_count + '</li>' + '<li>' + 'Language: ' + repos[i].language + '</li>' + '<li>' + 'Watchers: ' + repos[i].watchers_count + '</li>';
              document.getElementById('commandLine').innerHTML = message;
            }

            // Master Class-React-Redux section with information
            if (repos[i].name === 'masterclass-react-redux') {
              let message = '';
                  message += '<li>' + 'Forks: ' + repos[i].forks_count + '</li>' + '<li>' + 'Stargazers: ' + repos[i].stargazers_count + '</li>' + '<li>' + 'Language: ' + repos[i].language + '</li>' + '<li>' + 'Watchers: ' + repos[i].watchers_count + '</li>';
                  document.getElementById('masterClassRedux').innerHTML = message;
                }
          
          // React section with information
          if (repos[i].name === 'React') {
            let message = '';
            message += '<li>' + 'Forks: ' + repos[i].forks_count + '</li>' + '<li>' + 'Stargazers: ' + repos[i].stargazers_count + '</li>' + '<li>' + 'Language: ' + repos[i].language + '</li>' + '<li>' + 'Watchers: ' + repos[i].watchers_count + '</li>';
            document.getElementById('react').innerHTML = message;
          }


      }
       document.getElementById("modules").innerHTML = output;
    }

}; 
xhttp.open("GET", "hyf.json", true);
xhttp.send();


// This Part is for Step 1 Home work

/* Use the carGenerator function to generate 10 cars. The file with the function is here: https://github.com/HackYourFuture-CPH/JavaScript/blob/master/Week4/code/carGenerator.js

You call it like this: generateCars(10);

Create the following arrays:

1.1: Cars with speeds between 30 and 60

1.2: The makes of the cars that are not lightyellow, so the array is going to look like this: ['BMW', 'Fiat'] etc

1.3: Lets change the cars array so it can be read by a danish person. Return an array of objects where the key in the object called speed is called fart (danish for speed), the make is called maerke and the color is called farve. The output will look kind of like this:

[
    {
        maerke: 'Volvo',
        fart: 45,
        farve: 'lightYellow',
    }
]; */

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
const randomCar = generateCars(10);
console.log('generate cars', randomCar);

//console.log('Generate Random Cars: ')
//console.log(generateCars(10));


const allCars = generateCars(10);

function getSpeedOfCar(car) {
return car.speed 
}

function getMakeOfCar(car) {
return car.make;
}

// Cars with speeds between 30 and 60
const speedCars = allCars.filter(allCars => allCars.speed >= 30 && allCars.speed <=60);


console.log('Q 1.1: Cars with speeds between 30 and 60: ', speedCars);



// Cars that are not lightyellow
const notYellowCar = allCars.filter(allCars => allCars.color !== 'lightyellow').map(getMakeOfCar) ;

console.log('Q 1.2: cars that are not lightyellow: ', notYellowCar);

// Change the cars array so it can be read by a danish person

function convertToDanish (car) {
  return {
      maerke: car.make,
      farve: car.color,
      fart: car.speed
  }
}

const convertForDanishPerson = allCars.map(convertToDanish);
console.log('Q 1.3: Change the cars array so it can be read by a danish person: ' ,convertForDanishPerson);









