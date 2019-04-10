/**
* MyTreeRowPatch
* @constructor
*/
class MyTreeRowPatch extends CGFobject {
    constructor(scene){
        super(scene);
        
        this.trees = [];

        var tree = new MyTree(scene, 8, 2, 12, 8);

        this.trees.push(tree);

        tree = new MyTree(scene, 7, 2, 14, 7);

        this.trees.push(tree, tree);

        tree = new MyTree(scene, 6, 1, 11, 5);

        this.trees.push(tree, tree);

        tree = new MyTree(scene, 9, 2, 16, 7);

        this.trees.push(tree);
    }
    display(scene) {
        scene.pushMatrix();
        scene.translate(-29, 0, -1);
        this.trees[0].display(scene);
        scene.popMatrix();

        scene.pushMatrix();
        scene.translate(-17, 0, 2);
        this.trees[2].display(scene);
        scene.popMatrix();

        scene.pushMatrix();
        scene.translate(-5, 0, -3);
        this.trees[5].display(scene);
        scene.popMatrix();

        scene.pushMatrix();
        scene.translate(9, 0, 0);
        this.trees[3].display(scene);
        scene.popMatrix();

        scene.pushMatrix();
        scene.translate(15, 0, 1);
        this.trees[4].display(scene);
        scene.popMatrix();

        scene.pushMatrix();
        scene.translate(27, 0, -1);
        this.trees[1].display(scene);
        scene.popMatrix();
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


