/**
* MyTreeGroupPatch
* @constructor
*/
class MyTreeGroupPatch extends CGFobject {
    constructor(scene,trunkHeight,trunkRadius,treeTopHeight,treeTopRadius){//,trunkTexture,treeTopTexture) {
        super(scene);
        
        this.trees = [];

        var tree = new MyTree(scene, 8, 4, 8, 8);

        this.trees.push(tree, tree, tree);

        tree = new MyTree(scene, 7, 5, 9, 8);

        this.trees.push(tree, tree);

        tree = new MyTree(scene, 6, 4, 7, 6);

        this.trees.push(tree, tree);

        tree = new MyTree(scene, 8, 5, 10, 9);

        this.trees.push(tree, tree);
    }
    display(scene) {
        scene.pushMatrix();
        scene.translate(0, this.trunkHeight, 0);
        this.leafs.display()
        scene.popMatrix();

        this.trunk.display();
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


