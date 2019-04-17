/**
 * MyFloor
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyFloor extends CGFobject {
        constructor(scene) {
                super(scene);

                this.floor = new MyQuad(scene);
                
                this.texture = new CGFappearance(scene);
                this.texture.setAmbient(0.1, 0.1, 0.1, 1.0);
                this.texture.setDiffuse(0.7, 0.7, 0.7, 1.0);
                this.texture.setSpecular(0.5, 0.5, 0.5, 1.0);
                this.texture.setShininess(1.0);
                this.texture.loadTexture('textures/grass.png'); // nao esta  a funcionar em modo repeat...
                this.texture.setTextureWrap('REPEAT', 'REPEAT');
	}
	
	display() {
                for(var i = 100; i > 0; i--){
                        for(var j = 100; j > 0; j--){
                                this.texture.apply();
                                this.scene.pushMatrix();
                                this.scene.translate(i - 50, 0, j - 50);
                                this.scene.rotate(-Math.PI/2, 1, 0, 0);
                                this.floor.display();
                                this.scene.popMatrix();
                        }
                }
	}
}

