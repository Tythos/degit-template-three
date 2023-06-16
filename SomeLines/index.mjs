/**
 * 
 */

import * as THREE from "three";

class SomeLines extends THREE.Line {
    constructor() {
        super(new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(-2, 0, 0),
            new THREE.Vector3(0, 2, 0),
            new THREE.Vector3(2, 0, 0)
        ]), new THREE.LineBasicMaterial({
            "color": 0xeeeeee
        }));
    }
}

export default Object.assign(SomeLines, {
    "__tests__": {
        "can be tested": () => {
            expect(true).toEqual(true);
        }
    }
});
