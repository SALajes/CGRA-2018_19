/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			0, 0, 0,	//0
			1, 1, 0,	//2
			1, 1, 0,	//2
            3, 1, 0,	//4
            3, 1, 0,	//4
            2, 0, 0,    //6
            2, 0, 0     //6
		];

		this.normals = [
			0, 0, 1,
			0, 0, -1,
			0, 0, 1,
			0, 0, -1,
			0, 0, 1,
			0, 0, -1,
			0, 0, 1,
			0, 0, -1
		]

		this.texCoords = [
			1, 1,
			1, 1,
			0.75, 0.75,
			0.75, 0.75,
			0.5, 1,
			0.5, 1,
			0.25, 0.75,
			0.25, 0.75
		]

		//Counter-clockwise reference of vertices
		this.indices = [
			0,2,6,
			2,4,6,
			7,3,1, // Clock-wise for double-sided
			7,5,3
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

