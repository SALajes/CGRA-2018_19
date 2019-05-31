// /**
//  * MySemiSphere
//  * @constructor
//  */
// class MySemiSphere extends CGFobject {
//     constructor(scene, radius) {
//         super(scene);
//         this.radius = radius;
//         this.initBuffers();
//     }
//     initBuffers() {
//         this.vertices = [];
//         this.indices = [];
//         this.normals = [];
//         this.texCoords = [];

//         var angxz = 2 * Math.PI / 10;
//         var angy = angxz/2;
//         var coordX = 0;
//         var x1, x1b, x2, x2b, z1, z1b, z2, z2b, y1, y2;
//         var p1, p2, p3, p4;
//         var rad1, rad2;

//         var normal1;

//         for (var y = 0; y < 10; y++) {
//             y1 = this.radius*Math.sin(angy*y);
//             rad1 = this.radius*Math.cos(angy*y);
//             y2 = this.radius*Math.sin(angy*(y + 1));
//             rad2 = this.radius*Math.cos(angy*(y + 1));

//             for(var xz = 0; xz < 10; xz++){
//                 x1 = rad1*Math.sin(angxz*xz);
//                 x1b = rad2*Math.sin(angxz*xz);
//                 x2 = rad1*Math.sin(angxz*(xz+1));
//                 x2b = rad2*Math.sin(angxz*(xz+1));
//                 z1 = rad1*Math.cos(angxz*xz);
//                 z1b = rad2*Math.cos(angxz*xz);
//                 z2 = rad1*Math.cos(angxz*(xz + 1));
//                 z2b = rad2*Math.cos(angxz*(xz + 1));

//                 p1 = [x1, y1, z1];
//                 p2 = [x1b, y2, z1b];
//                 p3 = [x2b, y2, z2b];
//                 p4 = [x2, y1, z2];

//                 this.vertices.push(p1);
//                 this.vertices.push(p2);
//                 this.vertices.push(p3);
//                 this.vertices.push(p4);

//                 normal1 = [x1, y1, z1];

//                 var nsize = Math.sqrt(
//                     normal1[0] * normal1[0] +
//                     normal1[1] * normal1[1] +
//                     normal1[2] * normal1[2]
//                 );

//                 normal1[0] /= nsize;
//                 normal1[1] /= nsize;
//                 normal1[2] /= nsize;

//                 this.normals.push(...normal1);

//                 //indices
//                 this.indices.push(
//                     4 * xz + 10*y, (4 * xz + 1) + 10*y, (4 * xz + 2) + 10*y,
//                     (4 * xz + 2)+ 10*y, (4 * xz + 1)+ 10*y, 4 * xz+ 10*y,
//                     (4 * xz + 1)+ 10*y, (4 * xz + 3)+ 10*y, (4 * xz + 2)+ 10*y,
//                     (4 * xz + 2)+ 10*y, (4 * xz + 3)+ 10*y, (4 * xz + 1)+ 10*y
//                 );
//             }
//         }

//         this.primitiveType = this.scene.gl.TRIANGLES;
//         this.initGLBuffers();
//     }
// }

/**
 * MySemiSphere
 * @constructor
 */
class MySemiSphere extends CGFobject
{
	constructor(scene, slices, stacks)
	{
		super(scene);

		this.slices = slices;
		this.stacks = stacks;

		this.initBuffers();
	};

	initBuffers()
	{
		this.vertices = [];
		this.indices = [];
		this.normals = [];
		this.texCoords = [];

		var xz_angle = 2*Math.PI/this.slices;
		var y_angle = Math.PI/(2*this.stacks);

		for(var xz = 0; xz <= this.slices; ++xz) {

			for(var y = 0; y <= this.stacks; ++y) {

				this.vertices.push(
                    Math.cos(y_angle*y)*Math.cos(xz_angle*xz), 
                    Math.cos(y_angle*y)*Math.sin(xz_angle*xz), 
                    Math.sin(y_angle*y)
				);

				this.normals.push(
                    Math.cos(y_angle*y)*Math.cos(xz_angle*xz), 
                    Math.cos(y_angle*y)*Math.sin(xz_angle*xz), 
                    Math.sin(y_angle*y)
				);

				this.texCoords.push(
                    ((Math.cos(y_angle*y)*Math.cos(xz_angle*xz))+1)/2, 
                    1 - ((Math.cos(y_angle*y)*Math.sin(xz_angle*xz))+1)/2
				);

			}

		}

		for (var i = 0; i < this.slices; ++i) {
			for(var j = 0; j < this.stacks; ++j) {
				this.indices.push(
                    (i+1)*(this.stacks+1) + j, i*(this.stacks+1) + j+1, i*(this.stacks+1) + j,
                    i*(this.stacks+1) + j, i*(this.stacks+1) + j+1, (i+1)*(this.stacks+1) + j, 
                    i*(this.stacks+1) + j+1, (i+1)*(this.stacks+1) + j, (i+1)*(this.stacks+1) + j+1,
                    (i+1)*(this.stacks+1) + j+1, (i+1)*(this.stacks+1) + j, i*(this.stacks+1) + j+1
				);
			}
		}

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};