/**
 * Author: shaack
 * Date: 23.11.2017
 */

import {Svg} from "./src/ShLib/Svg"

// Draw rect

let svg = Svg.createSvg(document.getElementById("container1"));
let rect = Svg.addElement(svg, "rect", {x: 10, y: 10, width: 50, height: 50, fill: "red"});

// Draw Objects from Sprite



// svg.addElement("use", {"xlink:href": "#star", x: 10, y: 10});