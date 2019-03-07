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

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.diamond = new MyDiamond(this);
        this.triangle = new MyTriangle(this);
        this.bigtriangle = new MyTriangleBig(this);
        this.smalltriangle = new MyTriangleSmall(this);
        this.parallelogram = new MyParallelogram(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.scaleFactor = 1;
        this.displayTriangle = true;
        this.displayDiamond = true;
        this.displayTriangleBig = true;
        this.displayTriangleSmall = true;;
        this.displayParallelogram = true;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
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

        this.setDefaultAppearance();

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
                    0.0, this.scaleFactor, 0.0, 0.0,
                    0.0, 0.0, this.scaleFactor, 0.0,
                    0.0, 0.0, 0.0, 1.0];
        this.multMatrix(sca);

        // ---- BEGIN Primitives Transformation
        //Diamond
        var t1 = [1,   0,   0, 0,
                  0,   1,   0, 0,
                  0,   0,   1, 0,
                  0.5, 4.5, 0, 1];
        
        this.pushMatrix();
        this.multMatrix(t1);
        
        if(this.displayDiamond){
            this.diamond.display();
        }
        this.popMatrix();

        //Big Triangle 1
        this.pushMatrix();
        this.rotate((-Math.PI/2), 0, 0, 1);
        this.translate(-2, 0, 0);

        if(this.displayTriangleBig){
            this.bigtriangle.display();
        }

        this.popMatrix();

        //Big Triangle 2
        this.pushMatrix();
        this.rotate((Math.PI/2), 0, 0, 1);
        this.translate(-1, -1, 0);

        if(this.displayTriangleBig){
            this.bigtriangle.display();
        }

        this.popMatrix();

        //Triangle
        this.pushMatrix();
        this.rotate(-(135 * Math.PI)/180, 0, 0, 1);
        this.translate(Math.sqrt(2) + 1, 1, 0);

        if(this.displayTriangle){
            this.triangle.display();
        }

        this.popMatrix();

        //Parallelogram
        this.pushMatrix();
        this.scale(-1, 1, 1);
        this.rotate((-Math.PI/2), 0, 0, 1);
        this.translate(-2,0,0);

        if(this.displayParallelogram){
            this.parallelogram.display();
        }

        this.popMatrix();

        //Small Triangle 1
        this.pushMatrix();
        this.translate(Math.sqrt(2) - 0.33, -(3/2 * Math.sqrt(2) + 1), 0);
        this.rotate((135 * Math.PI)/180, 0, 0, 1);

        if(this.displayTriangleSmall){
            this.smalltriangle.display();
        }

        this.popMatrix();

        //Small Triangle 2
        this.pushMatrix();

        if(this.displayTriangleSmall){
            this.smalltriangle.display();
        }

        this.popMatrix();

        // ---- END Primitives Transformation

        // ---- BEGIN Primitive drawing section
        // if(this.displayDiamond){
        //     this.diamond.display();
        // }
        // if(this.displayTriangle){
    	//     this.triangle.display();
        // }
        // if(this.displayTriangleBig){
    	//     this.bigtriangle.display();
        // }
        // if(this.displayTriangleSmall){
    	//     this.smalltriangle.display();
        // }
        // if(this.displayParallelogram){
        //     this.parallelogram.display();
        // }

        // ---- END Primitive drawing section
    }
}
