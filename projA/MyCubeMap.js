class MyCubeMap extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scaleFactor = 100; //For controlling the cubemap's size
        this.initMaterials(scene);
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [
            0.5, -0.5, -0.5, //0 (0)
            0.5, -0.5, -0.5, //0
            0.5, -0.5, -0.5, //0 (0)
            0.5, 0.5, -0.5, //3 (1)
            0.5, 0.5, -0.5, //3
            0.5, 0.5, -0.5, //3
            -0.5, 0.5, -0.5, //6 (2)
            -0.5, 0.5, -0.5, //6
            -0.5, 0.5, -0.5, //6
            -0.5, -0.5, -0.5, //9 (3)
            -0.5, -0.5, -0.5, //9
            -0.5, -0.5, -0.5, //9
            0.5, -0.5, 0.5, //12 (4 - 0')
            0.5, -0.5, 0.5, //12
            0.5, -0.5, 0.5, //12
            0.5, 0.5, 0.5, //15 (5 - 1')
            0.5, 0.5, 0.5, //15
            0.5, 0.5, 0.5, //15
            -0.5, 0.5, 0.5, //18 (6 - 2')
            -0.5, 0.5, 0.5, //18
            -0.5, 0.5, 0.5, //18
            -0.5, -0.5, 0.5, //21 (7 - 3')
            -0.5, -0.5, 0.5, //21
            -0.5, -0.5, 0.5 //21
        ];

        this.normals = [
            -1, 0, 0, //0 - 0
            0, 0, 1, //1 - 0
            0, 1, 0, //2 - 0
            -1, 0, 0, //3 - 1
            0, -1, 0, //4 - 1
            0, 0, 1, //5 - 1
            1, 0, 0, //6 - 2
            0, 0, 1, //7 - 2
            0, -1, 0, //8 - 2
            1, 0, 0, //9 - 3
            0, 0, 1, //10 - 3
            0, 1, 0, //11 - 3
            -1, 0, 0, //12 - 4
            0, 0, -1, //13 - 4
            0, 1, 0, //14 - 4
            -1, 0, 0, //15 - 5
            0, -1, 0, //16 - 5
            0, 0, -1, //17 - 5
            1, 0, 0, //18 - 6
            0, 0, -1, //19 - 6
            0, -1, 0, //20 - 6
            1, 0, 0, //21 - 7
            0, 0, -1, //22 - 7
            0, 1, 0 //23 - 7
        ];

        this.texCoords = [
            0.5,2/3,
            0.5,2/3,
            0.5,2/3,
            0.5,1/3,
            0.5,1/3,
            0.5,1/3,
            0.25,1/3,
            0.25,1/3,
            0.25,1/3,
            0.25,2/3,
            0.25,2/3,
            0.25,2/3,
            0.75,2/3,
            0.75,2/3,
            0.5,1,
            0.75,1/3,
            0.5,0,
            0.75,1/3,
            0,1/3,
            1,1/3,
            0.25,0,
            0,2/3,
            1,2/3,
            0.25,1
        ];

        this.indices = [
            12, 3, 0, //face lateral direita
            15, 3, 12,
            22, 17, 13, //face lateral frente
            19, 17, 22,
            9, 18, 21, //face lateral esquerda
            6, 18, 9,
            1, 7, 10, //face lateral trás
            5, 7, 1,
            11, 14, 2, //face fundo
            23, 14, 11,
            20, 8, 4, //face topo
            16, 20, 4
        ];

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    initMaterials(scene) {
        this.mapTex = new CGFappearance(scene);
        this.mapTex.setAmbient(1, 1, 1, 1.0);
        this.mapTex.setDiffuse(0.5, 0.5, 0.5, 1.0);
        this.mapTex.setSpecular(0, 0, 0, 1.0);
        this.mapTex.setShininess(1.0);
        this.mapTex.loadTexture('textures/forest.png');
        this.mapTex.setTextureWrap('REPEAT', 'REPEAT');
    }
    display() {
        this.mapTex.apply();
        this.scene.pushMatrix();
        this.scene.scale(this.scaleFactor,this.scaleFactor,this.scaleFactor);
        super.display();
        this.scene.popMatrix();
    }
}