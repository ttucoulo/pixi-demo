import { autoDetectRenderer, Container, loader as Loader, Sprite, Point } from "pixi.js";
import TweenMax from "gsap";


let animate = function (renderer: any, stage: any) {
    requestAnimationFrame(() => {
        animate(renderer, stage)
    });
    
    renderer.render(stage);
}

let initDisplay = function () {
    let renderer = autoDetectRenderer(256, 256);

    document.body.appendChild(renderer.view);

    let stage = new Container();
    let sprite = new Sprite(Loader.resources["static/images/tour.png"].texture);
    sprite.scale = new Point(0.25, 0.25);
    stage.addChild(sprite);
    
    (<any>TweenMax).fromTo(sprite, 2, {x: 0, y: 0}, {x: 70, y: 70}).play();

    animate(renderer, stage);
}

Loader
    .add("static/images/tour.png")
    .load(initDisplay);




