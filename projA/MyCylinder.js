/**
 * MyCylinder
 * @constructor
 */
class MyCylinder extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = 0;
        var alphaAng = 2 * Math.PI / this.slices;
        var coordX = 0;

        for (var i = 0; i < this.slices; i++) {
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals 
            // in each face will be different

            var sa = Math.sin(ang);
            var saa = Math.sin(ang + alphaAng);
            var ca = Math.cos(ang);
            var caa = Math.cos(ang + alphaAng);

            this.vertices.push(ca, 0, -sa);
            this.vertices.push(ca, 1, -sa);
            this.vertices.push(caa, 0, -saa);
            this.vertices.push(caa, 1, -saa);

            var normal1 = [
                ca,
                1,
                -sa
            ];

            var normal2 = [
                caa,
                1,
                -saa
            ];

            // normalization
            var nsize = Math.sqrt(
                normal1[0] * normal1[0] +
                normal1[1] * normal1[1] +
                normal1[2] * normal1[2]
            );

            normal1[0] /= nsize;
            normal1[1] /= nsize;
            normal1[2] /= nsize;

            nsize = Math.sqrt(
                normal2[0] * normal2[0] +
                normal2[1] * normal2[1] +
                normal2[2] * normal2[2]
            );

            normal2[0] /= nsize;
            normal2[1] /= nsize;
            normal2[2] /= nsize;

            this.normals.push(...normal1);
            this.normals.push(...normal1);
            this.normals.push(...normal2);
            this.normals.push(...normal2);

            //indices

            this.indices.push(
                4 * i, (4 * i + 1), (4 * i + 2),
                (4 * i + 2), (4 * i + 1), 4 * i,
                (4 * i + 1), (4 * i + 3), (4 * i + 2),
                (4 * i + 2), (4 * i + 3), (4 * i + 1),
            );

            //texture coords
            this.texCoords.push(
                coordX, 1,
                coordX, 0
            );

            coordX += 1 / this.slices;

            console.log(coordX);

            this.texCoords.push(
                coordX, 1,
                coordX, 0
            );

            ang += alphaAng;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    updateBuffers(complexity) {
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}