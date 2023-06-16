# degit-template-three

A degit-friendly template for basic THREE.js projects, slightly streamlined and with a few more modern bells and whistles (es6 modules, etc.).

```bash
$ degit https://github.com/tythos/degit-template-three.git
$ yarn install
$ yarn run dev
```

There are several examples of how scene elements can be encapsulated and extended within individual folders (with a natural pathway for extracting them into their own packages):

* *Cube* demonstrates a basic extension of the THREE.Mesh model using a BoxGeometry and MeshNormalMaterial

* *SomeLines* demonstrates a basic extension of the THREE.Line model using several segments from points and a solid color line material

* *TitleText* demonstrates how "troika-three-text" can be used to easily drop antialiased text meshes into a THREE scene

At the top level (e.g., "./index.mjs"), there are several patterns to observe (some of which are less optimal than others when considering how you may want to scale your own 3d web application):

* *onAnimationFrame()* is the basic routine for a single rendering pass; in addition to updating time interval from the global THREE.Clock instance, it calls an update function (if present) on each scene child and invokes the core "WebGLRenderer.render()" method for the global scene and camera before waiting for another animation frame.

* *onWindowKeypress()* demonstrates some basic event handling for global keypress behaviors; in this case, the position and orientation of the camera are updated with W/A/S/D keys

* *onWindowLoad()* is the primary "entry point" for the application that configures the core application models (e.g., scene; renderer; camera; and clock), and populates the scene using several of the scene graph node model extensions outlined above before binding the rendering routine and keypress listeners

Finally, the *onWindowLoad()* listener is bound the global (window) load event.
