class MyUnitCube extends CGFobject {
    constructor(scene){
        super(scene);
        this.initBuffers();
    }
    initBuffers(){
        this.vertices = [
             0.5,-0.5,-0.5, //0
             0.5, 0.5,-0.5, //1
            -0.5, 0.5,-0.5, //2
            -0.5,-0.5,-0.5, //3
             0.5,-0.5, 0.5, //4 - 0'
             0.5, 0.5, 0.5, //5 - 1'
            -0.5, 0.5, 0.5, //6 - 2'
            -0.5,-0.5, 0.5  //7 - 3'
        ];

        this.indices = [
            3, 1, 0, //face inferior
            3, 2, 1,
            0, 4, 3, //face lateral frente
            4, 7, 3,
            0, 1, 5, //face lateral direita
            0, 5, 4,
            2, 6, 1, //face lateral tras
            1, 6, 5,
            3, 7, 2, //face lateral esquerda
            2, 7, 6,
            4, 5, 7, //face topo
            7, 5, 6
        ];

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}