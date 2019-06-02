/**
 * MyNest
 * @constructor
 */
class MyNest extends CGFobject {
    constructor(scene) {
        super(scene);
        
        this.nest = new MySemiSphere(scene, 10, 5);

        this.branch = null;
        
        this.initMaterials(scene);
    }
    initMaterials(scene) {
        this.nestTex = new CGFappearance(scene);
        this.nestTex.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.nestTex.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.nestTex.setSpecular(0.0, 0.0, 0.0, 1.0);
        this.nestTex.setShininess(1.0);
        this.nestTex.loadTexture('textures/nest.jpg');
        this.nestTex.setTextureWrap('REPEAT', 'REPEAT');
    }
    display(){
        if(this.branch != null){
            this.branch.display();
        }

        this.nestTex.apply();
        this.scene.pushMatrix();
        this.scene.scale(1, 0.3, 1);
        this.scene.translate(0, 1, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.nest.display();
        this.scene.popMatrix();
    }
    checkNest(x, z){
        if(Math.abs(x) < 0.5 && Math.abs(z) < 0.5){
            return true;
        }
        else return false;
    }
    addBranch(branch){
        this.branch = branch;
    }
}