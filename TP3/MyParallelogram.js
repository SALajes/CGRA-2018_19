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

		//Counter-clockwise reference of vertices
		this.indices = [
			0,2,6,
			2,4,6,
			6,2,0,
			6,4,2
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

