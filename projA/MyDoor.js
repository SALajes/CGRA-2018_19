/**
 * MyDoor
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyDoor extends CGFobject {
	constructor(scene) {
        super(scene);
        
        this.door = new MyQuad(scene);

        this.texDoor = new CGFappearance(scene);
        this.texDoor.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.texDoor.setDiffuse(0.7, 0.7, 0.7, 1.0);
        this.texDoor.setSpecular(0.5, 0.5, 0.5, 1.0);
        this.texDoor.setShininess(1.0);
        this.texDoor.loadTexture('textures/door.png');
        this.texDoor.setTextureWrap('REPEAT', 'REPEAT');
	}
	display(){
        this.texDoor.apply();

        this.scene.pushMatrix();
        this.scene.scale(0.45,0.90,1);
        this.door.display();
        this.scene.popMatrix();
    }
}

