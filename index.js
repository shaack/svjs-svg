/**
 * Author: shaack
 * Date: 23.11.2017
 */

import {Svg} from "./src/svjs/Svg"

// Draw rect

let svg1 = Svg.createSvg(document.getElementById("container1"));
Svg.addElement(svg1, "rect", {x: 10, y: 10, width: 50, height: 50, fill: "red"});

// Draw Elements from Sprite with `use`

let svg2 = Svg.createSvg(document.getElementById("container2"));
Svg.loadSprite("./assets/sprite.svg", ["star", "circle", "triangle", "smiley"]);
Svg.addElement(svg2, "use", {"href": "#triangle", x: 10, y: 10});
Svg.addElement(svg2, "use", {"href": "#smiley", x: 100, y: 10});
Svg.addElement(svg2, "use", {"href": "#smiley", transform: "translate(200,10) scale(0.5)"});

// Animate Element

let svg3 = Svg.createSvg(document.getElementById("container3"));
let star = Svg.addElement(svg3, "use", {"href": "#star", x: -47, y: -45, transform: "translate(60,60)"});
Svg.addElement(star, "animateTransform", {
    attributeName: "transform", type: "rotate",
    values: "0 0 0; 360 0 0", additive: "sum", dur: "6s", repeatCount: "indefinite"
});
Svg.addElement(star, "animateMotion", {dur: "10s", values: "0,0; 250,0; 0,0", repeatCount: "indefinite"});
