/**
 * MySmallTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleSmall extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
		this.texFlag = true;
	}
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0
			-1, 0, 0,	//0
			0, 1, 0,	//2
			0, 1, 0,	//2
			1, 0, 0,	//4
			1, 0, 0		//4
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
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 4, 2,
			3, 5, 1 //clock wise so it can be seen both ways
		];

		this.texCoords = [
			0.25, 0.75,
			0.25, 0.75,
			0.5, 0.5,
			0.5, 0.5,
			0.75, 0.75,
			0.75, 0.75
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	swap() {
		this.texFlag = !this.texFlag;
		
		if(this.texFlag){
			this.texCoords = [
				0.25, 0.75,
				0.25, 0.75,
				0.5, 0.5,
				0.5, 0.5,
				0.75, 0.75,
				0.75, 0.75
			];
		}
		else{
			this.texCoords = [
				0, 0,
				0, 0,
				0.25, 0.25,
				0.25, 0.25,
				0, 0.5,
				0, 0.5
			];
		}
		this.updateTexCoordsGLBuffers();
	}
}

