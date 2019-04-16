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
        var line_counter = 0;
        var coloumn_counter = 0;

        for(var level = this.level; level >= 0; level--){
            for(var j = Math.pow(level*2 + 1, 2); j > 0; j--){
                if(coloumn_counter == level*2 + 1){
                    line_counter++;
                    coloumn_counter = 0;
                }
    
                this.scene.pushMatrix();
                this.scene.translate(coloumn_counter + offset, offset, line_counter + offset);
                this.cube.display();
                this.scene.popMatrix();
    
                coloumn_counter++;
            }

            offset++;
            line_counter = 0;
            coloumn_counter = 0;
        }
    }
}


