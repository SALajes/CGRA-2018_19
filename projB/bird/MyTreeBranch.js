/**
 * MyTreeBranch
 * @constructor
 */
class MyTreeBranch extends CGFobject {
    constructor(scene) {
        super(scene);

        var radius = (Math.random() * 1)/8 + 0.05;
        var height = (Math.random() * 2)/8 + 1;
        
        this.branch = new MyCylinder(scene, 5, radius, height);
        
        this.initMaterials(scene);
    }
    initMaterials(scene) {
        this.branchTex = new CGFappearance(scene);
        this.branchTex.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.branchTex.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.branchTex.setSpecular(0.0, 0.0, 0.0, 1.0);
        this.branchTex.setShininess(1.0);
        this.branchTex.loadTexture('textures/wood.png');
        this.branchTex.setTextureWrap('REPEAT', 'REPEAT');
    }
    display(){
        this.branchTex.apply();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.branch.display();
        this.scene.popMatrix();
    }
}    