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
        this.lights[0].setPosition(0, 99, 0, 1);
        // this.lights[0].setAmbient(0.8, 0.8, 0.8, 1.0);
        this.lights[0].setDiffuse(1.0, 1, 1, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    updateObjectComplexity() {
        // this.prism.updateBuffers(this.objectComplexity);
        // this.cylinder.updateBuffers(this.objectComplexity);
        // this.pyramid.updateBuffers(this.objectComplexity);
        // this.tree.updateBuffers(this.objectComplexity);
    }
    updateTextures(){
        this.enableTextures(this.textures);
    }
    updateDayNight(){
        // if(this.mode){
        // }
        // else{
            // 
        // }
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

        // Draw axis
        if(this.displayAxis)
            this.axis.display();
        
        //Apply default appearance
        this.setDefaultAppearance();

        this.pushMatrix();
        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
        
        // ---- BEGIN Primitive drawing section
        // this.cylinder.display();
        // this.cone.display();
        // this.treeGroup.display();
        // this.prism.display();
        // this.pyramid.display();
        this.pushMatrix();
        this.scale(3,3,3);
        this.house.display();
        this.popMatrix();
        this.map.display();
        // this.hill.display();
        // ---- END Primitive drawing section
    }
}