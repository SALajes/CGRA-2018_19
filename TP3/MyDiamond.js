/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyDiamond extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0
			-1, 0, 0,	//1
			0, -1, 0,	//2
			0, -1, 0,	//3
			0, 1, 0,	//4
			0, 1, 0,	//5
			1, 0, 0,	//6
			1, 0, 0		//7
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
			0, 2, 4,
			2, 6, 4,
			5, 3, 1, //clock wise so it can be seen both ways
			5, 7, 3
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

