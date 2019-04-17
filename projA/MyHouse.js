/**
 * MyHouse
 * @constructor
 */
class MyHouse extends CGFobject {
    constructor(scene) {
        super(scene);

        this.cube = new MyUnitCubeQuad(scene,'textures/house_bottom.png','textures/house_walls.png','textures/house_bottom.png');
        this.roof = new MyPyramid(scene, 4, 4);
        this.pillar = new MyPrism(scene, 8, 0.2, 1);
        this.panel = new MySolarPanel(scene);
        this.door = new MyDoor(scene);
        this.initMaterials(scene);
    }
    initMaterials(scene) {
        this.pillarTex = new CGFappearance(scene);
        this.pillarTex.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.pillarTex.setDiffuse(0.4, 0.4, 0.4, 1.0);
        this.pillarTex.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.pillarTex.setShininess(2.0);
        this.pillarTex.loadTexture('textures/column.png');
        this.pillarTex.setTextureWrap('REPEAT', 'REPEAT');

        this.roofTex = new CGFappearance(scene);
        this.roofTex.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.roofTex.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.roofTex.setSpecular(0.0, 0.0, 0.0, 1.0);
        this.roofTex.setShininess(1.0);
        this.roofTex.loadTexture('textures/alt_roof.png');
        this.roofTex.setTextureWrap('REPEAT', 'REPEAT');
    }
    display() {
        var a = 0.75;

        this.scene.pushMatrix();
        this.scene.translate(-0.05, 0.90/2, 0.501);
        this.door.display();
        this.scene.popMatrix();

        this.pillarTex.apply();
        
        for (var i = 1; i <= 4; i++) {
            this.scene.pushMatrix();

            if (i == 1)
                this.scene.translate(a, 0, a);
            else if (i == 2)
                this.scene.translate(-a, 0, -a);
            else if (i == 3)
                this.scene.translate(-a, 0, a);
            else
                this.scene.translate(a, 0, -a);

            this.pillar.display();
            this.scene.popMatrix();
        }

        this.roofTex.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 1, 0);
        this.scene.scale(1.35, 0.6, 1.35);
        this.scene.rotate(Math.PI / 4, 0, 1, 0);
        this.roof.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.2,1.43,0.3);
        this.scene.rotate(Math.asin(1/Math.sqrt(3.5)),1,0,0);
        this.scene.scale(0.8,0.8,0.8);
        this.panel.display();
        this.scene.popMatrix();
    }
}