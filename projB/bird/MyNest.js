/**
 * MyNest
 * @constructor
 */
class MyNest extends CGFobject {
    constructor(scene) {
        super(scene);
        
        this.nest = new MySemiSphere(scene, 10, 5);

        this.branches = [];
        this.positions = [];
        
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
        for(var i = 0; i < this.branches.length; i++){
            this.scene.pushMatrix();
            this.scene.rotate(this.positions[i] * Math.PI /180);
            this.scene.translate(0,0.3,0);
            this.branch.display();
            this.scene.popMatrix();
        }

        this.nestTex.apply();
        this.scene.pushMatrix();
        this.scene.scale(2, 0.3, 2);
        this.scene.translate(0, 1, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.nest.display();
        this.scene.popMatrix();
    }
    checkNest(x, z){
        if(Math.abs(x) < 5 && Math.abs(z) < 5){
            return true;
        }
        else return false;
    }
    addBranch(branch){
        this.branches.push(branch);
        this.positions.push(Math.random() * 360);
    }
}