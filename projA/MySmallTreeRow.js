/**
* MySmallTreeRow
* @constructor
*/
class MySmallTreeRow extends CGFobject {
    constructor(scene){
        super(scene);
        
        this.trees = [];
        var tree;
        var trunk_height;
        var trunk_radius;
        var leaf_height;
        var leaf_radius;
        var x;
        var z;
        this.x = [];
        this.z = [];

        for(var i = 0; i < 3; i++){
            trunk_height = Math.floor((Math.random() * 3) + 4);
            trunk_radius = Math.floor((Math.random() * 1) + 2);
            leaf_height = Math.floor((Math.random() * 8) + 7);
            leaf_radius = Math.floor((Math.random() * 3) + 4);
            tree = new MyTree(scene, trunk_height, trunk_radius, leaf_height, leaf_radius);
            this.trees.push(tree);

            x = Math.floor((Math.random() * 4) - 2);
            z = Math.floor((Math.random() * 4) - 2);

            this.x.push(x);
            this.z.push(z);
        }
    }
    display() {
        var offset = 8;

        for(var i = 0; i < 3; i++){
            
            this.scene.pushMatrix();
            this.scene.translate(this.x[i] + offset*i, 0, this.z[i]);
            this.trees[i].display(this.scene);
            this.scene.popMatrix();
        }
    }
}
