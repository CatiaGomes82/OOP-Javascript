import { Page } from '../framework/page.js';

export class CarsPage extends Page {
    
    constructor() {
        super('Cars');
    }
    
    createElement() {
        super.createElement();
    }
    
    getElementString() {
        return `<div>
        <h1>Cars</h1>
        </div>`;
    }
}