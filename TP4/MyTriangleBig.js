/**
 * MyBigTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
		this.texFlag = true;
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
			3, 5, 1 //clock wise so it can be seen both ways
		];

		this.texCoords = [
			1, 0,
			1, 0,
			0.5, 0.5,
			0.5, 0.5,
			0, 0,
			0, 0
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	swap() {
		this.texFlag = !this.texFlag;
		if(this.texFlag){
			this.texCoords = [
				1, 0,
				1, 0,
				0.5, 0.5,
				0.5, 0.5,
				0, 0,
				0, 0
			];
		}
		else {
			this.texCoords = [
				1, 1,
				1, 1,
				0.5, 0.5,
				0.5, 0.5,
				1, 0,
				1, 0
			];
		}
		this.updateTexCoordsGLBuffers();
	}
}

