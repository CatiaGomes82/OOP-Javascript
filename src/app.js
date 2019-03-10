import { fleet } from './data/fleet-data.js';
import { FleetDataService } from './services/fleet-data-service.js';
import { ApplicationBase } from './framework/application-base.js';
import { HomePage } from './pages/home-page.js';
import { CarsPage } from './pages/cars-page.js';
import { DronesPage } from './pages/drones-page.js';

export class App extends ApplicationBase {
    constructor() {
        super('Application');
        this.dataService = new FleetDataService();
        this.dataService.loadData(fleet);

        this.addRoute('Home', new HomePage(), true);
        this.addRoute('Cars', new CarsPage);
        this.addRoute('Drones', new DronesPage);

        // get a car by license
        let car = this.dataService.getCarByLicense('PRT473');
        console.log(car)

        // get cars sorted by license
        let cars = this.dataService.getCarsSortedByLicense();
        for(let car of cars) {
            console.log(car.license);
        }

        // filter cars by make
        let filteredCars = this.dataService.filterCarsByMake('e');
        for(let car of filteredCars) {
            console.log(car.make);
        }

        // returns all of the cars
        for(let car of this.dataService.cars) {
            console.log(car);
        }

        // returns all the errors in the application
        for(let e of this.dataService.errors) {
            console.log(e.message);
        }

    }
}

export let application = new App();
application.show($('body'));