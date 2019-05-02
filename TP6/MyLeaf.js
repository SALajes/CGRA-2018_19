class MyLeaf extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
        this.material = new CGFappearance(scene);
        this.material.setAmbient(43/255,175/255,0);
        this.material.setDiffuse(43/255,175/255,0);
        this.material.setSpecular(0,0,0);
        this.material.setShininess(1.0);
    }
    initBuffers(){
        this.vertices = [
            4,0,0,
            0,0,-2.5,
            0,0,2.5,
            4,0,0,
            0,0,-2.5,
            0,0,2.5
        ];

        this.normals = [
            0,1,0,
            0,1,0,
            0,1,0,
            0,-1,0,
            0,-1,0,
            0,-1,0
        ];

        this.indices = [
            0,1,2,
            5,4,3
        ];

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    display(){
        this.material.apply();
        super.display();
    }
}