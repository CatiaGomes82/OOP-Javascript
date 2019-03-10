import { Page } from '../framework/page.js';

export class HomePage extends Page {
    
    constructor() {
        super('Home');
    }
    
    createElement() {
        super.createElement();
    }
    
    getElementString() {
        return `<div>
        <h1>Homepage</h1>
        </div>`;
    }
}