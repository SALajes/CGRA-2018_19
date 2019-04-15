/**
* MyCone
* @constructor
*/
class MyCone extends CGFobject {
    constructor(scene, slices, radius, height) {
        super(scene);
        this.slices = slices;
        this.radius = radius;
        this.height = height;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){

            this.vertices.push(this.radius*Math.cos(ang), 0, -this.radius*Math.sin(ang));
            this.indices.push(i, (i+1) % this.slices, this.slices);
            // this.indices.push(i+1, (i+2) % this.slices, 0);
            this.normals.push(Math.cos(ang), Math.cos(Math.PI/4.0), -Math.sin(ang));
            ang+=alphaAng;
        }
        this.vertices.push(0,this.height,0);
        this.normals.push(0,1,0);

        //Base drawing
        ang = 0;

        for(i = 0; i < this.slices; i++){

            this.vertices.push(this.radius*Math.cos(ang), 0, -this.radius*Math.sin(ang));
            this.indices.push(2*this.slices, this.slices+(i+2),this.slices+(i+1));
            this.normals.push(0, -1, 0);
            ang+=alphaAng;
        }
        this.vertices.push(0,0,0);
        this.normals.push(0,-1,0);

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


