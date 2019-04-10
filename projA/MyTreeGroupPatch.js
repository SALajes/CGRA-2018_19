/**
* MyTreeGroupPatch
* @constructor
*/
class MyTreeGroupPatch extends CGFobject {
    constructor(scene){
        super(scene);
        
        this.trees = [];

        var tree = new MyTree(scene, 8, 3, 10, 8);

        this.trees.push(tree, tree, tree);

        tree = new MyTree(scene, 7, 3, 12, 7);

        this.trees.push(tree, tree);

        tree = new MyTree(scene, 6, 2, 9, 5);

        this.trees.push(tree, tree);

        tree = new MyTree(scene, 9, 3, 14, 7);

        this.trees.push(tree, tree);
    }
    display(scene) {
        scene.pushMatrix();
        scene.translate(-13, 0, -15);
        this.trees[5].display(scene);
        scene.popMatrix();

        scene.pushMatrix();
        scene.translate(-12, 0, 2);
        this.trees[3].display(scene);
        scene.popMatrix();

        scene.pushMatrix();
        scene.translate(-15, 0, 16);
        this.trees[2].display(scene);
        scene.popMatrix();

        scene.pushMatrix();
        scene.translate(0, 0, -12);
        this.trees[0].display(scene);
        scene.popMatrix();

        scene.pushMatrix();
        scene.translate(0, 0, 2);
        this.trees[8].display(scene);
        scene.popMatrix();

        scene.pushMatrix();
        scene.translate(2, 0, 14);
        this.trees[4].display(scene);
        scene.popMatrix();

        scene.pushMatrix();
        scene.translate(12, 0, -13);
        this.trees[7].display(scene);
        scene.popMatrix();

        scene.pushMatrix();
        scene.translate(14, 0, 2);
        this.trees[1].display(scene);
        scene.popMatrix();

        scene.pushMatrix();
        scene.translate(13, 0, 15);
        this.trees[6].display(scene);
        scene.popMatrix();
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


