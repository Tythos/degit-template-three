/**
 * Initial entry point. Referenced from index.html.
 */

import * as THREE from "three";
import Cube from "./Cube/index.mjs";
import WebGL from "three/addons/capabilities/WebGL.js";
import SomeLines from "./SomeLines/index.mjs";
import TitleText from "./TitleText/index.mjs";

function onAnimationFrame(event) {
    let dt_s = window.clock.getDelta();
    window.scene.children.forEach(child => {
        if (typeof(child.update) === "function") {
            child.update(dt_s);
        }
    });
    window.renderer.render(window.scene, window.camera);
    requestAnimationFrame(onAnimationFrame);
}

function onWindowKeypress(event) {
    let r = Math.sqrt(window.camera.position.x**2 + window.camera.position.z**2);
    let a = Math.atan2(window.camera.position.x, window.camera.position.z);
    switch (event.key.toLowerCase()) {
        case "w":
            r -= 1e-1;
            break;
        case "s":
            r += 1e-1;
            break;
        case "a":
            a -= 1e-1;
            break;
        case "d":
            a += 1e-1;
            break;
        default:
            break;
    }
    window.camera.position.x = r * Math.sin(a);
    window.camera.position.z = r * Math.cos(a);
    window.camera.lookAt(window.scene.position.clone());
}

/**
 * "Entry point" in which a Nameplace is instantiated, configured, and finally
 * rendered. See "README.md" for more details.
 * 
 * @param {Object} event - Basic on-window-load event
 */
function onWindowLoad(event) {
    if (!WebGL.isWebGLAvailable()) {
        console.error("WebGL is not supported within this browser");
        return;
    }
    
    let w = window.innerWidth;
    let h = window.innerHeight;
    Object.assign(window, {
        "scene": new THREE.Scene(),
        "camera": new THREE.PerspectiveCamera(75, w / h, 1e-1, 1e3),
        "renderer": new THREE.WebGLRenderer({ "antialias": true }),
        "clock": new THREE.Clock()
    });

    window.scene.add(window.camera);
    window.camera.position.z = 3;
    window.renderer.setSize(w, h);
    document.body.appendChild(renderer.domElement);
    window.scene.add(new Cube());
    window.scene.add(new SomeLines());
    window.scene.add(new TitleText("This is some text"));
    requestAnimationFrame(onAnimationFrame);
    window.addEventListener("keypress", onWindowKeypress);
}

window.addEventListener("load", onWindowLoad);
