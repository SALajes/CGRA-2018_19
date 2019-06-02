/**
 * MyBird
 * @constructor
 */
class MyBird extends CGFobject {
    constructor(scene) {
        super(scene);

        this.beek = new MyPyramid(scene, 4, 6);
        this.eyes = new MyCylinder(scene, 8, 0.1, 1.30);
        this.body = new MySphere(scene, 10, 5);
        this.wings_low = new MyQuad(scene);
        this.wings_high = new MyTriangle(scene);
        this.tail = new MyTriangle(scene);

        this.branch = null;

        //Control variables
        this.orientation = 0;
        this.speed = 0;
        this.x = 0;
        this.y = 3;
        this.z = 0;

        this.initMaterials(scene);
    }
    initMaterials(scene) {
        this.beekTex = new CGFappearance(scene);
        this.beekTex.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.beekTex.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.beekTex.setSpecular(0.0, 0.0, 0.0, 1.0);
        this.beekTex.setShininess(1.0);
        this.beekTex.loadTexture('textures/yellow.jpg');
        this.beekTex.setTextureWrap('REPEAT', 'REPEAT');

        this.bodyTex = new CGFappearance(scene);
        this.bodyTex.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.bodyTex.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.bodyTex.setSpecular(0.0, 0.0, 0.0, 1.0);
        this.bodyTex.setShininess(1.0);
        this.bodyTex.loadTexture('textures/blue.jpg');
        this.bodyTex.setTextureWrap('REPEAT', 'REPEAT');

        this.eyesTex = new CGFappearance(scene);
        this.eyesTex.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.eyesTex.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.eyesTex.setSpecular(0.0, 0.0, 0.0, 1.0);
        this.eyesTex.setShininess(1.0);
        this.eyesTex.loadTexture('textures/black.jpg');
        this.eyesTex.setTextureWrap('REPEAT', 'REPEAT');
    }
    animated_display(t) {
        this.scene.pushMatrix();
        this.scene.translate(0, Math.cos(t)/2, 0);
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.orientation, 0, 1, 0);

        this.scene.pushMatrix();
        this.scene.translate(-0.75 / 2, 0, 0);
        this.scene.rotate(-Math.PI / 8 * Math.sin(t), 0, 0, 1);
        this.display_wing();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.75 / 2, 0, 0);
        this.scene.scale(-1, 1, 1);
        this.scene.rotate(-Math.PI / 8 * Math.sin(t), 0, 0, 1);
        this.display_wing();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.50, -0.5);
        this.display_tail();
        this.scene.popMatrix();

        if(this.branch != null){
            this.scene.pushMatrix();
            this.scene.translate(0, -0.10, 0);
            this.branch.display();
            this.scene.popMatrix();
        }

        this.display_body();
        this.scene.popMatrix();
    }
    display_body() {
        this.beekTex.apply();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.65, 1.50);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(1 / 6, 1 / 3, 1 / 6);
        this.beek.display();
        this.scene.popMatrix();

        this.eyesTex.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.65, 0.80, 1.20);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.eyes.display();
        this.scene.popMatrix();

        this.bodyTex.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0.75, 0.75);
        this.scene.scale(0.75, 0.75, 0.75);
        this.body.display();
        this.scene.popMatrix();

        this.bodyTex.apply();
        this.scene.pushMatrix();
        this.scene.scale(0.75, 0.75, 1);
        this.body.display();
        this.scene.popMatrix();
    }
    display_wing() {
        this.bodyTex.apply();

        this.scene.pushMatrix();
        this.scene.translate(-1, 0, 0);
        this.scene.rotate(3 * Math.PI / 4, 0, 0, 1);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(1 / 4, 1, 1);
        this.scene.rotate(-3 * Math.PI / 4, 0, 0, 1);
        this.wings_high.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(Math.sqrt(2) / 2, 1, 1);
        this.wings_low.display();
        this.scene.popMatrix();
    }
    display_tail() {
        this.bodyTex.apply();

        this.scene.pushMatrix();
        this.scene.scale(-1 / 2, 1 / 2, 1 / 2);
        this.scene.rotate(-Math.PI / 3, 0, 0, 1);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.translate(1, 1, 0);
        this.tail.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(1 / 2, 1 / 2, 1 / 2);
        this.scene.rotate(-Math.PI / 3, 0, 0, 1);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.translate(1, 1, 0);
        this.tail.display();
        this.scene.popMatrix();
    }
    startAnimation(updatePeriod){
        this.distSegment = updatePeriod * this.y / 1000;
        this.isDescending = true;
    }
    catchAnimation() {
        if(this.isDescending)
            this.y -= this.distSegment;
        else
            this.y += this.distSegment;

        if(this.y <= 0){
            this.isDescending = false;

            if(this.branch == null){
                console.log("does this even go here");
                this.scene.verifyBranchBirdPosition(this.x, this.z);
            }
            else this.scene.verifyNestBirdPosition(this.x, this.z);
        }
        else if(this.y >= 3){
            return false;
        }

        return true;
    }    
    catchBranch(branch){        
        this.branch = branch;
    }
    getBranch(){
        return this.branch;
    }
    releaseBranch(){
        this.branch = null;
    }
    update(speedFactor) {
        this.x = this.x + this.speed * Math.sin(this.orientation) * speedFactor;
        this.z = this.z + this.speed * Math.cos(this.orientation) * speedFactor;
    }
    reset() {
        this.x = 0;
        this.y = 3;
        this.z = 0;
        this.speed = 0;
        this.orientation = 0;
    }
    turn(v) {
        this.orientation += v;
    }
    accelerate(v) {
        this.speed += v;
    }
}