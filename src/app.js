import { Car } from './classes/car.js';
import { Drone } from './classes/drone.js';
import { fleet } from './fleet-data.js';
import { FleetDataService } from './services/fleet-data-service.js';

let dataService = new FleetDataService();
dataService.loadData(fleet);

// get a car by license
let car = dataService.getCarByLicense('PRT473');
console.log(car)

// get cars sorted by license
let cars = dataService.getCarsSortedByLicense();
for(let car of cars) {
    console.log(car.license);
}

// filter cars by make
let filteredCars = dataService.filterCarsByMake('e');
for(let car of filteredCars) {
    console.log(car.make);
}

// returns all of the cars
for(let car of dataService.cars) {
    console.log(car);
}

// returns all the errors in the application
for(let e of dataService.errors) {
    console.log(e.message);
}