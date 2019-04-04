class MyUnitCubeQuad extends CGFobject {
    constructor(scene) {
        super(scene);
        this.top = new MyQuad(scene);
        this.bottom = new MyQuad(scene);
        this.front = new MyQuad(scene);
        this.back = new MyQuad(scene);
        this.left = new MyQuad(scene);
        this.right = new MyQuad(scene);
        this.initMaterials(scene);
    }
    initMaterials(scene) {
        this.sideTex = new CGFappearance(scene);
        this.sideTex.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.sideTex.setDiffuse(0.7, 0.7, 0.7, 1.0);
        this.sideTex.setSpecular(0.5, 0.5, 0.5, 1.0);
        this.sideTex.setShininess(1.0);
        this.sideTex.loadTexture('images/mineSide.png');
        this.sideTex.setTextureWrap('REPEAT', 'REPEAT');

        this.topTex = new CGFappearance(scene);
        this.topTex.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.topTex.setDiffuse(0.7, 0.7, 0.7, 1.0);
        this.topTex.setSpecular(0.5, 0.5, 0.5, 1.0);
        this.topTex.setShininess(1.0);
        this.topTex.loadTexture('images/mineTop.png');
        this.topTex.setTextureWrap('REPEAT', 'REPEAT');

        this.bottomTex = new CGFappearance(scene);
        this.bottomTex.setAmbient(0.1, 0.1, 0.1, 1.0);
        this.bottomTex.setDiffuse(0.7, 0.7, 0.7, 1.0);
        this.bottomTex.setSpecular(0.5, 0.5, 0.5, 1.0);
        this.bottomTex.setShininess(1.0);
        this.bottomTex.loadTexture('images/mineBottom.png');
        this.bottomTex.setTextureWrap('REPEAT', 'REPEAT');
    }
    display() {
        this.topTex.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.top.display();
        this.scene.popMatrix();

        this.bottomTex.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.bottom.display();
        this.scene.popMatrix();

        this.sideTex.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.front.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.back.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(-Math.PI / 2, 0, 1, 0);
        this.left.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.right.display();
        this.scene.popMatrix();
    }
}