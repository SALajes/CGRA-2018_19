/**
 * MyBird
 * @constructor
 */
class MyBird extends CGFobject {
    constructor(scene) {
        super(scene);

        this.beek = new MyPyramid(scene, 4, 6);
        this.eyes = new MyUnitCubeQuad(scene, 'textures/black.jpg', 'textures/black.jpg', 'textures/black.jpg')
        this.head = new MyUnitCubeQuad(scene, 'textures/blue.jpg', 'textures/blue.jpg', 'textures/blue.jpg');
        this.body = new MyUnitCubeQuad(scene, 'textures/blue.jpg', 'textures/blue.jpg', 'textures/blue.jpg');
        this.wings_low = new MyQuad(scene);
        this.wings_high = new MyTriangle(scene);
        this.tail = new MyTriangle(scene);

        //Control variables
        this.orientation = 0;
        this.speed = 0;
        this.x = 0;
        this.y = 0;
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

        this.birdTex = new CGFappearance(scene);
        this.birdTex.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.birdTex.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.birdTex.setSpecular(0.0, 0.0, 0.0, 1.0);
        this.birdTex.setShininess(1.0);
        this.birdTex.loadTexture('textures/blue.jpg');
        this.birdTex.setTextureWrap('REPEAT', 'REPEAT');
    }
    display() {
        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.orientation, 0, 1, 0);

        this.scene.pushMatrix();
        this.scene.translate(0.75 / 2, 0, 0);
        this.scene.scale(-1, 1, 1);
        this.scene.rotate(-Math.PI / 8, 0, 0, 1);
        this.display_wing();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.75 / 2, 0, 0);
        this.scene.rotate(-Math.PI / 8, 0, 0, 1);
        this.display_wing();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.50, -0.75 / 2);
        this.display_tail();
        this.scene.popMatrix();

        this.display_body();
        this.scene.popMatrix();
    }
    animated_display(t) {
        this.scene.pushMatrix();
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

        this.display_body();
        this.scene.popMatrix();
    }
    display_body() {
        this.beekTex.apply();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.6, 1.15);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(1 / 8, 1 / 4, 1 / 8);
        this.beek.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.80, 0.80);
        this.scene.scale(1.05, 0.2, 0.2);
        this.eyes.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.75, 0.75);
        this.scene.scale(0.75, 0.75, 0.75);
        this.head.display();
        this.scene.popMatrix();

        this.body.display();
    }
    display_wing() {
        this.birdTex.apply();

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
        this.birdTex.apply();

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
    update() {
        this.x = this.x + this.speed * Math.sin(this.orientation);
        this.z = this.z + this.speed * Math.cos(this.orientation);
    }
    reset() {
        this.x = 0;
        this.y = 0;
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