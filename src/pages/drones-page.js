import { Page } from '../framework/page.js';

export class DronesPage extends Page {
    
    constructor() {
        super('Drones');
    }
    
    createElement() {
        super.createElement();
    }
    
    getElementString() {
        return `<div>
        <h1>Drones</h1>
        </div>`;
    }
}