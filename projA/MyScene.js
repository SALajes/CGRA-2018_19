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

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.treeGroup1 = new MyTreeGroupPatch(this);
        this.treeGroup2 = new MyTreeGroupPatch(this);
        this.treeRow1 = new MyTreeRowPatch(this);
        this.treeRow2 = new MyTreeRowPatch(this);
        this.house = new MyHouse(this);
        this.panel = new MySolarPanel(this);
        this.hill5 = new MyVoxelHill(this, 5);
        this.hill7 = new MyVoxelHill(this, 7);
        this.hill10 = new MyVoxelHill(this, 10);
        this.map = new MyCubeMap(this);
        this.floor = new MyFloor(this);

        //Objects connected to MyInterface
        this.displayAxis = false;
        this.textures = true;
        this.mode = 0;
        this.scaleFactor = 2.0;

        //For drop-down menu
        this.modeId = { 'Day': 0, 'Night': 1};
    }
    initLights() {
        var ambFactor = 0.6;

        this.lights[0].setPosition(0.0, 50.0, 0.0, 1.0);
        this.lights[0].setAmbient(1.0*ambFactor, 0.8*ambFactor, 0.6*ambFactor, 1.0);
        this.lights[0].setDiffuse(1.0, 0.8, 0.6, 1.0);
        this.lights[0].setSpecular(1.0, 0.8, 0.6, 1.0);
        this.lights[0].setConstantAttenuation(0.1);
        this.lights[0].enable();
        this.lights[0].update();

        ambFactor = 0.4;

        this.lights[1].setPosition(0.0, 50.0, 0.0, 1.0);
        this.lights[1].setAmbient(0.2*ambFactor, 0.8*ambFactor, 1.0*ambFactor, 1.0);
        this.lights[1].setDiffuse(0.2*ambFactor, 0.8*ambFactor, 1.0*ambFactor, 1.0);
        this.lights[1].setSpecular(0.2*ambFactor, 0.8*ambFactor, 1.0*ambFactor, 1.0);
        this.lights[1].setConstantAttenuation(1);
        this.lights[1].disable();
        this.lights[1].update();

        ambFactor = 0.1;

        this.lights[2].setPosition(0.0, 0.5, 0.0, 1.0);
        this.lights[2].setAmbient(1.0*ambFactor, 0.3*ambFactor, 0.0*ambFactor, 1.0);
        this.lights[2].setDiffuse(1.0, 0.3, 0.0, 1.0);
        this.lights[2].setSpecular(1.0, 0.3, 0.0, 1.0);
        this.lights[2].setConstantAttenuation(1);
        this.lights[2].setVisible(true);
        this.lights[2].disable();
        this.lights[2].update();
    }
    initCameras() {
        this.camera = new CGFcamera(1, 0.1, 500, vec3.fromValues(0, 50, -100), vec3.fromValues(0, 0, 0));
    }
    updateTextures(){
        this.enableTextures(this.textures);
    }
    updateDayNight(){
        if(this.mode == 0){
            console.log('Day mode activated ', this.mode);
            this.lights[0].enable();
            this.lights[1].disable();
            this.lights[2].disable();
        }
        else{
            console.log('Night mode activated ', this.mode);
            this.lights[0].disable();
            this.lights[1].enable();
            this.lights[2].enable();
        }
        this.map.updateTex();
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

        this.lights[0].update();
        this.lights[1].update();
        this.lights[2].update();

        // Draw axis
        if(this.displayAxis)
            this.axis.display();
        
        // ---- BEGIN Primitive drawing section
        this.pushMatrix();
        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
        
        // ---- BEGIN Primitive drawing section

        this.pushMatrix();
        this.rotate(Math.PI, 0, 1, 0);
        this.scale(3,3,3);
        this.house.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-10,0,-25);
        this.treeRow2.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-5,0,-15);
        this.treeRow1.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-10,0,20);
        this.treeGroup2.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-10,0,15);
        this.treeGroup1.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(20,0,10);
        this.scale(2,1,2);
        this.hill5.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(10,0,15);
        this.scale(1, 2, 1);
        this.hill7.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(20,0,20);
        this.scale(1.5, 1.5, 1.5);
        this.hill10.display();
        this.popMatrix();

        this.floor.display();

        this.map.display();
        
        // ---- END Primitive drawing section
    }
}