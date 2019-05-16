/**
 * MyFireplace
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyFireplace extends CGFobject {
    constructor(scene) {
        super(scene);

        this.fire = new MyCone(scene, 5, 0.5, 1.5);

        this.trunk = new MyCylinder(scene, 5, 0.2, 2);

        this.FireTex = new CGFappearance(scene);
        this.FireTex.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.FireTex.setDiffuse(1.0, 116/255, 0.0, 1.0);
        this.FireTex.setSpecular(1.0 *0.5, 116/255 *0.5, 0.0 *0.5, 1.0);
        this.FireTex.setShininess(1.0);
        this.FireTex.loadTexture('textures/fire.png');
        this.FireTex.setTextureWrap('REPEAT', 'REPEAT');

        this.trunkTex = new CGFappearance(scene);
        this.trunkTex.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.trunkTex.setDiffuse(0.9, 0.9, 0.9, 1.0);
        this.trunkTex.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.trunkTex.setShininess(1.0);
        this.trunkTex.loadTexture('textures/tree_trunk.png');
        this.trunkTex.setTextureWrap('REPEAT', 'REPEAT');
    }
    display(mode) {
        if (mode != 0) {
            this.FireTex.apply();
            this.scene.pushMatrix();
            this.scene.translate(0, 0.2, 0);
            this.fire.display();
            this.scene.popMatrix();
        }

        for (var i = 0; i < 3; i++) {
            this.trunkTex.apply();
            this.scene.pushMatrix();
            this.scene.rotate(i * 2 * Math.PI / 3, 0, 1, 0);
            this.scene.rotate(Math.PI / 2, 1, 0, 0);
            this.scene.translate(0, -1, 0);
            this.trunk.display();
            this.scene.popMatrix();
        }
    }
}