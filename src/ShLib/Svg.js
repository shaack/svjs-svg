/**
 * Author: shaack
 * Date: 23.11.2017
 */

// https://stackoverflow.com/questions/16488884/add-svg-element-to-existing-svg-using-dom

const NAMESPACE = "http://www.w3.org/2000/svg";

export class Svg {

    /**
     * create the Svg in the HTML DOM
     * @param containerElement
     * @returns {Element}
     */
    static createSvg(containerElement) {
        let svg = document.createElementNS(NAMESPACE, "svg");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        containerElement.appendChild(svg);
        return svg;
    }
    /**
     * @param parent
     * @param name
     * @param attributes
     * @returns {Element}
     */
    static addElement(parent, name, attributes) {
        let element = document.createElementNS(NAMESPACE, name);
        for(let attribute in attributes) {
            element.setAttribute(attribute, attributes[attribute]);
        }
        parent.appendChild(element);
        return element;
    }

    /**
     * @param element
     */
    static removeElement(element) {
        element.parent().removeChild(element);
    }

    /**
     * Load sprite into html document (as `svg/defs), elements can be referenced by `use` from all Svgs in page
     * @param url
     */
    static loadSprite(url) {

    }
}