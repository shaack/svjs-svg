/**
 * Author: shaack
 * Date: 23.11.2017
 */

// load defs from file
// https://stackoverflow.com/questions/16488884/add-svg-element-to-existing-svg-using-dom

export class Svg {
    constructor(element) {
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        element.appendChild(this.svg);
    }
}