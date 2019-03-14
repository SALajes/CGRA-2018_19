/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);

        //Objects part of the Tangram
	this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.bigtriangle = new MyTriangleBig(scene);
        this.smalltriangle = new MyTriangleSmall(scene);
        this.parallelogram = new MyParallelogram(scene);

        this.vertices = [
                this.diamond.vertices,
                this.triangle.vertices,
                this.bigtriangle.vertices,
                this.smalltriangle.vertices,
                this.parallelogram.vertices
        ];

        this.normals = [
                this.diamond.normals,
                this.triangle.normals,
                this.bigtriangle.normals,
                this.smalltriangle.normals,
                this.parallelogram.normals
        ];
	}
	display(scene) {
        // ---- BEGIN Primitives Transformation
        //Diamond
        var t1 = [1,   0,   0, 0,
                  0,   1,   0, 0,
                  0,   0,   1, 0,
                  0.5, 4.5, 0, 1];
        
        scene.pushMatrix();
        scene.multMatrix(t1);
        
        this.diamond.display();
        scene.popMatrix();

        //Big Triangle 1
        scene.pushMatrix();
        scene.translate(0, 2, 0);
        scene.rotate((-Math.PI/2), 0, 0, 1);

        this.bigtriangle.display()
        scene.popMatrix();

        //Big Triangle 2
        scene.pushMatrix();
        scene.translate(1, -1, 0);
        scene.rotate((Math.PI/2), 0, 0, 1);

        this.bigtriangle.display();
        scene.popMatrix();

        //Triangle
        scene.pushMatrix();
        scene.translate(-1, -(Math.sqrt(2) + 1), 0);
        scene.rotate(-(135 * Math.PI)/180, 0, 0, 1);

        this.triangle.display();
        scene.popMatrix();

        //Parallelogram
        scene.pushMatrix();
        scene.scale(-1, 1, 1);
        scene.rotate((-Math.PI/2), 0, 0, 1);
        scene.translate(-2,0,0);

        this.parallelogram.display();
        scene.popMatrix();

        //Small Triangle 1
        scene.pushMatrix();
        scene.translate(-1 + Math.sqrt(0.5) + Math.sqrt(2), -(3/2 * Math.sqrt(2) + 1), 0);
        scene.rotate((135 * Math.PI)/180, 0, 0, 1);

        this.smalltriangle.display();
        scene.popMatrix();

        //Small Triangle 2
        scene.pushMatrix();
        scene.translate(-(1+ Math.sqrt(2)), -(1 + Math.sqrt(2) + Math.sqrt(0.5)), 0);
        scene.rotate(Math.PI/4, 0, 0, 1);

        this.smalltriangle.display();
        scene.popMatrix();
        // ---- END Primitives Transformation
	}
}
