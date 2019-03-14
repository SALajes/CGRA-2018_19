/**
 * MyBigTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-2, 0, 0,	//0
			-2, 0, 0,	//0
			0, 2, 0,	//2
			0, 2, 0,	//2
			2, 0, 0, 	//4
			2, 0, 0 	//4
		];

		this.normals = [
			0,0,1,
			0,0,-1,
			0,0,1,
			0,0,-1,
			0,0,1,
			0,0,-1
		]

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 4, 2,
			2, 4, 0 //clock wise so it can be seen both ways
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

