 /**
  * 
  */

import * as THREE from "three";

class Cube extends THREE.Mesh {
    constructor() {
        super();
        this.geometry = new THREE.BoxGeometry(1, 1, 1);
        this.material = new THREE.MeshNormalMaterial();
    }

    update(dt_s) {
        this.rotation.x += 2e-1 * dt_s;
        this.rotation.y += 4e-2 * dt_s;
    }
}

export default Object.assign(Cube, {
    "__tests__": {
        "can be tested": () => {
            expect(true).toEqual(true);
        }
    }
});
