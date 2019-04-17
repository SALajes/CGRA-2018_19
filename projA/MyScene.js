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
        this.tree = new MyTree(this, 4, 2, 6,4);
        this.treeGroup = new MyTreeGroupPatch(this);
        this.house = new MyHouse(this);
        this.prism = new MyPrism(this, 4, 1, 1);
        this.cylinder = new MyCylinder(this, 4, 1, 1);
        this.cone = new MyCone(this, 4, 1, 1);
        this.pyramid = new MyPyramid(this, 4, 4);
        this.panel = new MySolarPanel(this);
        this.hill = new MyVoxelHill(this, 5);
        this.map = new MyCubeMap(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.textures = true;
        this.mode = 0;
        this.objectComplexity = 0.5;
        this.scaleFactor = 2.0;

        //For drop-down menu
        this.modeId = { 'Day': 0, 'Night': 1};
    }
    initLights() {
        var ambFactor = 0.7;

        this.lights[0].setPosition(0.0, 50.0, 0.0, 1.0);
        this.lights[0].setAmbient(1.0*ambFactor, 0.8*ambFactor, 0.6*ambFactor, 1.0);
        this.lights[0].setDiffuse(1.0, 0.8, 0.6, 1.0);
        this.lights[0].setSpecular(1.0, 0.8, 0.6, 1.0);
        this.lights[0].setConstantAttenuation(0.5);
        this.lights[0].enable();
        this.lights[0].update();

        ambFactor = 0.4;

        this.lights[1].setPosition(0.0, 50.0, 0.0, 1.0);
        this.lights[1].setAmbient(0.7*ambFactor, 0.8*ambFactor, 1.0*ambFactor, 1.0);
        this.lights[1].setDiffuse(0.7, 0.8, 1.0, 1.0);
        this.lights[1].setSpecular(0.7, 0.8, 1.0, 1.0);
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
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(49, 49, 49), vec3.fromValues(0, 0, 0));
    }
    updateObjectComplexity() {
        this.cone.updateBuffers(this.objectComplexity);
        this.cylinder.updateBuffers(this.objectComplexity);
        // this.pyramid.updateBuffers(this.objectComplexity);
        // this.tree.updateBuffers(this.objectComplexity);
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
        
        this.cylinder.enableNormalViz();
        this.cylinder.display();
        // this.cone.display();
        // this.treeGroup.display();
        // this.prism.display();
        // this.pushMatrix();
        // this.translate(3,0,0);
        // this.scale(3,3,3);
        // this.house.display();
        // this.popMatrix();
        // this.map.display();
        // this.hill.display();

        this.popMatrix();
        // ---- END Primitive drawing section
    }
}