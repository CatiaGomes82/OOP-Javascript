import { BaseElement } from './base-element.js';

export class TitleBar extends BaseElement {
    constructor(title) {
        super();
        this.title = title;
        this.links = [];
    }

    addLink(title, href) {
        this.links.push({ title, href });
    }

    getElementString() {
        let links = '';

        for (let link of this.links){
            links += `<a class="mdl-navigation__link">${link.title}</a>\n`;
        }
        
        return `<div class="mdl-layout__header-row">
            <!-- Title -->
            <span class="mdl-layout-title">${this.title}</span>
            <!-- Add spacer, to align navigation to the right -->
            <div class="mdl-layout-spacer"></div>
            <!-- Navigation. We hide it in small screens. -->
            <nav class="mdl-navigation mdl-layout--large-screen-only">
                ${links}
            </nav>
            </div>`;
    }
}