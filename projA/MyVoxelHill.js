/**
* MyVoxelHill
* @constructor
*/
class MyVoxelHill extends CGFobject {
    constructor(scene, level){
        super(scene);

        this.level = level - 1;
        
        this.cube = new MyUnitCubeQuad(scene);
    }
    display() {
        var offset = 0.5;
        for(var i = this.level; i >= 0; i++){
            for(var j = this.level*2 + 1; j >= 0; j++){
                for(var k = this.level*2 + 1; k >= 0; k++){
                    this.scene.pushMatrix();
                    this.scene.translate(offset + j, 0.5 + (this.level - i), offset + k);
                    this.cube.display();
                    this.scene.popMatrix();
                }
            }
        }
    }
}


