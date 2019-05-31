class MySegment extends CGFobject {
    constructor(scene) {
        super(scene);
        this.quad = new MyQuad(scene);
        this.initMaterials(scene);
    }
    initMaterials(scene) {
        this.material = new CGFappearance(scene);
        this.material.setAmbient(1.0, 1.0, 1.0, 1.0);
        this.material.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.material.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.material.setShininess(2.0);
    }
    display() {
        this.material.apply()
        this.scene.pushMatrix();
        this.scene.scale(0.1,1.3,1.0);
        this.quad.display();
        this.scene.popMatrix();
    }
}