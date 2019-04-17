/**
 * MySolarPanel
 * @constructor
 */
class MySolarPanel extends CGFobject {
    constructor(scene) {
        super(scene);

        this.panel = new MyPrism(scene, 4, 0.1, 0.7);
        this.cylinder = new MyCylinder(scene, 12, 0.1, 0.5);
        this.initMaterials(scene);
    }
    initMaterials(scene) {
        this.panelTex = new CGFappearance(scene);
        this.panelTex.setAmbient(0.05, 0.05, 0.05, 1.0);
        this.panelTex.setDiffuse(0.0, 0.0, 0.0, 1.0);
        this.panelTex.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.panelTex.setShininess(50.0);
        this.panelTex.loadTexture('textures/solar_panel.png');
        this.panelTex.setTextureWrap('REPEAT', 'REPEAT');

        this.cylinderTex = new CGFappearance(scene);
        this.cylinderTex.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.cylinderTex.setDiffuse(0.0, 0.0, 0.0, 1.0);
        this.cylinderTex.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.cylinderTex.setShininess(50.0);
        this.cylinderTex.loadTexture('textures/metal.png');
        this.cylinderTex.setTextureWrap('REPEAT', 'REPEAT');
    }
    display() {
        this.panelTex.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.25,0,0);
        this.scene.scale(3,0.5,1);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.rotate(-Math.PI/4,0,1,0);
        this.panel.display();
        this.scene.popMatrix();

        this.cylinderTex.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,0.05,0);
        this.scene.rotate(-Math.PI/2,0,0,1);
        this.cylinder.display();
        this.scene.popMatrix();
    }
}