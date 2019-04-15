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
    display() {
        this.scene.pushMatrix();
        this.scene.translate(-13, 0, -15);
        this.trees[5].display(this.scene);
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-12, 0, 2);
        this.trees[3].display(this.scene);
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-15, 0, 16);
        this.trees[2].display(this.scene);
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, -12);
        this.trees[0].display(this.scene);
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 2);
        this.trees[8].display(this.scene);
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2, 0, 14);
        this.trees[4].display(this.scene);
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(12, 0, -13);
        this.trees[7].display(this.scene);
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(14, 0, 2);
        this.trees[1].display(this.scene);
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(13, 0, 15);
        this.trees[6].display(this.scene);
        this.scene.popMatrix();
    }
}
