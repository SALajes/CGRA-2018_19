/**
 * MyBird
 * @constructor
 */
class MyBird extends CGFobject {
    constructor(scene) {
        super(scene);

        this.beek = new MyPyramid(scene, 4, 6);
        this.eyes = new MyUnitCubeQuad(scene,'textures/black.jpg','textures/black.jpg','textures/black.jpg')
        this.head = new MyUnitCubeQuad(scene,'textures/blue.jpg','textures/blue.jpg','textures/blue.jpg');
        this.body = new MyUnitCubeQuad(scene,'textures/blue.jpg','textures/blue.jpg','textures/blue.jpg');
        this.wings_low = new MyQuad(scene);
        this.wings_high = new MyTriangle(scene);
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

        this.wingTex = new CGFappearance(scene);
        this.wingTex.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.wingTex.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.wingTex.setSpecular(0.0, 0.0, 0.0, 1.0);
        this.wingTex.setShininess(1.0);
        this.wingTex.loadTexture('textures/blue.jpg');
        this.wingTex.setTextureWrap('REPEAT', 'REPEAT');
    }
    display(){
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.display_wing();
        this.scene.popMatrix();

        this.beekTex.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0.6, 1.15);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(1/8, 1/4, 1/8);
        this.beek.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.80, 0.80);
        this.scene.scale(1.05,0.2,0.2);
        this.eyes.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.75, 0.75);
        this.scene.scale(0.75,0.75,0.75);
        this.head.display();
        this.scene.popMatrix();

        this.body.display();
    }
    display_wing(){

    }
}