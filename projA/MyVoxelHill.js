/**
* MyVoxelHill
* @constructor
*/
class MyVoxelHill extends CGFobject {
    constructor(scene, level){
        super(scene);

        this.level = level - 1;
        
        this.cube = new MyUnitCubeQuad(scene,'textures/mineTop.png','textures/mineSide.png','textures/mineBottom.png');
    }
    display() {
        var offset = 0.5;
        var line_counter = 0;
        var column_counter = 0;

        for(var level = this.level; level >= 0; level--){
            for(var j = Math.pow(level*2 + 1, 2); j > 0; j--){
                if(column_counter == level*2 + 1){
                    line_counter++;
                    column_counter = 0;
                }
    
                this.scene.pushMatrix();
                this.scene.translate(column_counter + offset, offset, line_counter + offset);
                this.cube.display();
                this.scene.popMatrix();
    
                column_counter++;
            }

            offset++;
            line_counter = 0;
            column_counter = 0;
        }
    }
}


