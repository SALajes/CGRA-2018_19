/**
 * MyTryangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1, -1, 0,	//0
			-1, -1, 0,	//0
			-1, 1, 0,	//2
			-1, 1, 0,	//2
			1, -1, 0,	//4
			1, -1, 0	//4
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
			0, 1,
			0, 1,
			0, 0.5,
			0, 0.5,
			0.5, 1,
			0.5, 1
		]

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 4, 2,
			3, 5, 1 //clock wise so it can be seen both ways
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

