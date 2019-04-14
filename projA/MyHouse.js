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
    display(scene) {
        var a = 0.75;

        for(var i = 1; i <= 4; i++){
            scene.pushMatrix();

            if(i == 1)
                scene.translate(a, 0, a);
            else if(i == 2)
                scene.translate(-a, 0, -a);
            else if(i == 3)
                scene.translate(-a, 0, a);
            else 
                scene.translate(a, 0, -a);

            this.pillar.display();
            scene.popMatrix();
        }

        scene.pushMatrix();
        scene.translate(0, 1, 0);
        scene.scale(1.35, 0.6, 1.35);
        scene.rotate(Math.PI/4, 0, 1, 0);
        this.roof.display();
        scene.popMatrix();   

        scene.pushMatrix();
        scene.translate(0, 0.5, 0);
        this.cube.display();
        scene.popMatrix();
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


