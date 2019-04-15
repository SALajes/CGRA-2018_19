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
        this.initMaterials(scene);
    }
    initMaterials(scene) {
        this.leafsTex = new CGFappearance(scene);
        this.leafsTex.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.leafsTex.setDiffuse(0.8, 0.8, 0.8, 1.0);
        this.leafsTex.setSpecular(0.3, 0.3, 0.3, 1.0);
        this.leafsTex.setShininess(1.0);
        this.leafsTex.loadTexture('textures/tree_top.png');
        this.leafsTex.setTextureWrap('REPEAT', 'REPEAT');

        this.trunkTex = new CGFappearance(scene);
        this.trunkTex.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.trunkTex.setDiffuse(0.9, 0.9, 0.9, 1.0);
        this.trunkTex.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.trunkTex.setShininess(1.0);
        this.trunkTex.loadTexture('textures/tree_trunk.png');
        this.trunkTex.setTextureWrap('REPEAT', 'REPEAT');
    }
    display() {
        this.scene.pushMatrix();
        this.scene.translate(0, this.trunkHeight, 0);
        this.leafsTex.apply();
        this.leafs.display();
        this.scene.popMatrix();

        this.trunkTex.apply()
        this.trunk.display();
    }
    
    updateBuffers(complexity){
        this.trunk.updateBuffers(complexity);
        this.leafs.updateBuffers(complexity);
    }
}


