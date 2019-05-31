/**
 * MyScene
 * @constructor
 */
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        //update() method will be called as close to possible to once every 50ms
        this.setUpdatePeriod(30);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new MyTerrain(this);
        this.house = new MyHouse(this);
        this.map = new MyCubeMap(this);
        this.bird = new MyBird(this);
        this.lightning = new MyLightning(this);
        this.branches = new MyBranches(this);
        this.nest = new MyNest(this);
        this.sphere = new MySemiSphere(this, 10, 5);

        //LSPlants
        this.plants = [];
        this.numPlants = 15;

        var ang = 0;
        var angInc = (2*Math.PI)/this.numPlants;
        for(var i=0; i<this.numPlants; ++i){
            var xTranslate = Math.sin(ang) * 18;
            var zTranslate = Math.cos(ang) * 18;
            this.plants.push(new MyLSplant(this, xTranslate, 0, zTranslate));
            this.plants[i].doGenerate();
            ang += angInc;
        }

        this.makeLightning = false;
        this.lightningAnimation = false;
        //For time related animations
        this.timeFactor = 0;

        //Acceleration and turning constants
        this.accelerationFactor = 0.1;
        this.turnFactor = Math.PI/8;

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.scaleFactor = 2.0;
        this.speedFactor = 1.0;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(96, 84, 96), vec3.fromValues(0, 15, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    checkKeys() {
        var text = "Keys pressed: ";
        var keysPressed = false;
        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            text += " W ";
            keysPressed = true;
            this.bird.accelerate(this.accelerationFactor);
        }
        if (this.gui.isKeyPressed("KeyS")) {
            text += " S ";
            keysPressed = true;
            this.bird.accelerate(-this.accelerationFactor);
        }
        if (this.gui.isKeyPressed("KeyA")) {
            text += " A ";
            keysPressed = true;
            this.bird.turn(this.turnFactor * this.speedFactor);
        }
        if (this.gui.isKeyPressed("KeyD")) {
            text += " D ";
            keysPressed = true;
            this.bird.turn(-this.turnFactor * this.speedFactor);
        }
        if (this.gui.isKeyPressed("KeyR")) {
            text += " R ";
            keysPressed = true;
            this.bird.reset();
        }
        if (this.gui.isKeyPressed("KeyL")) {
            text += " L ";
            keysPressed = true;
            this.makeLightning = true;
        }
        if (keysPressed)
            console.log(text);
    }
    update(t) {
        this.checkKeys();
        if(this.makeLightning){
            this.lightning.startAnimation(t);
            this.lightningAnimation = true;
            this.makeLightning = false;
        }
        if(this.lightningAnimation){
            if(this.lightning.update(t))
                this.lightningAnimation = false;
        }

        this.bird.update(this.speedFactor);
        this.timeFactor = t * 2* Math.PI/ 1000;
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        // ---- BEGIN Primitive drawing section
        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        this.pushMatrix();
        this.translate(-25, 2.5, -0);
        this.scale(4,4,4);
        this.rotate(Math.PI/2, 0, 1, 0);
        this.house.display();
        this.popMatrix();

        this.branches.display();

        this.plane.display();

        this.nest.display();

        this.pushMatrix();
        this.translate(0, 3, 0);
        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
        this.bird.animated_display(this.timeFactor*this.speedFactor);
        this.popMatrix();
        this.map.display();

        for(var i = 0; i < this.numPlants; i++) {
            this.plants[i].display();
        }

        if(this.lightningAnimation)
            this.lightning.display();
        // ---- END Primitive drawing section
    }
}