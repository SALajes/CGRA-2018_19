/**
* MyTree
* @constructor
*/
class MyTree extends CGFobject {
    constructor(scene,trunkHeight,trunkRadius,treeTopHeight,treeTopRadius){//,trunkTexture,treeTopTexture) {
        super(scene);
        this.trunkHeight = trunkHeight;
        this.trunk = new MyCylinder(scene, 10, trunkRadius, trunkHeight);
        this.leafs = new MyCone(scene, 10, treeTopRadius, treeTopHeight);
    }
    display(scene) {
        scene.pushMatrix();
        scene.translate(0, this.trunkHeight, 0);
        this.leafs.display();
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


