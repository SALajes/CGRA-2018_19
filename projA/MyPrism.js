/**
* MyPrism
* @constructor
*/
class MyPrism extends CGFobject {
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
        this.texCoords = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;
        var coordX = 0;

        for(var i = 0; i < this.slices; i++){
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals 
            // in each face will be different

            var sa=this.radius*Math.sin(ang);
            var saa=this.radius*Math.sin(ang+alphaAng);
            var ca=this.radius*Math.cos(ang);
            var caa=this.radius*Math.cos(ang+alphaAng);

            this.vertices.push(ca, 0, -sa);
            this.vertices.push(caa, 0, -saa);
            this.vertices.push(ca, this.height, -sa);
            this.vertices.push(caa, this.height, -saa);

            var normal= [
                saa-sa,
                ca*saa-sa*caa,
                caa-ca
            ];

            // normalization
            var nsize=Math.sqrt(
                normal[0]*normal[0]+
                normal[1]*normal[1]+
                normal[2]*normal[2]
            );

            normal[0]/=nsize;
            normal[1]/=nsize;
            normal[2]/=nsize;

            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);

            //indices

            this.indices.push(
                4*i, (4*i+1), (4*i+2),
                (4*i+2), (4*i+1), 4*i,
                (4*i+1), (4*i+3), (4*i+2),
                (4*i+2), (4*i+3), (4*i +1),
            ); 

            //texture coords
            this.texCoords.push(
                coordX,1
            );
            
            coordX += 1/this.slices;

            this.texCoords.push(
                coordX,1
            );

            coordX -= 1/this.slices;

            this.texCoords.push(
                coordX,0
            );

            coordX += 1/this.slices;

            this.texCoords.push(
                coordX,0
            );

            ang+=alphaAng;
        }


        //Base drawing
        ang = 0;

        for(i = 0; i < this.slices; i++){
            sa=this.radius*Math.sin(ang);
            ca=this.radius*Math.cos(ang);

            this.vertices.push(ca, 0, -sa);
            this.vertices.push(ca, this.height, -sa);

            this.normals.push(0,-1,0);
            this.normals.push(0,1,0);

            this.indices.push((2*i+2) % (2*this.slices) + 4*this.slices, 4*this.slices+(2*i), 6*this.slices);
            this.indices.push(6*this.slices+1, 4*this.slices+(2*i+1), (2*i+3) % (2*this.slices) + 4*this.slices);

            ang+=alphaAng;
        }
        this.vertices.push(0,0,0);
        this.vertices.push(0,this.height,0);
        this.normals.push(0,-1,0);
        this.normals.push(0,1,0);

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


