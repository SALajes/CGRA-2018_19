/**
* MyHouse
* @constructor
*/
class MyHouse extends CGFobject {
    constructor(scene){
        super(scene);
        
        this.cube = new MyUnitCube(scene);
        this.roof = new MyPyramid(scene, 4, 4);
        this.pillar = new MyPrism(scene,8, 0.2, 1);
    }
    display() {
        var a = 0.75;

        for(var i = 1; i <= 4; i++){
            this.scene.pushMatrix();

            if(i == 1)
                this.scene.translate(a, 0, a);
            else if(i == 2)
                this.scene.translate(-a, 0, -a);
            else if(i == 3)
                this.scene.translate(-a, 0, a);
            else 
                this.scene.translate(a, 0, -a);

            this.pillar.display();
            this.scene.popMatrix();
        }

        this.scene.pushMatrix();
        this.scene.translate(0, 1, 0);
        this.scene.scale(1.35, 0.6, 1.35);
        this.scene.rotate(Math.PI/4, 0, 1, 0);
        this.roof.display();
        this.scene.popMatrix();   

        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.cube.display();
        this.scene.popMatrix();
    }
}
