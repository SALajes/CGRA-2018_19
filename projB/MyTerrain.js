class MyTerrain extends CGFobject{
	constructor(scene) {
		super(scene);
        this.plane = new Plane(scene, 32);
        this.shader = new CGFshader(scene.gl, "shaders/terrain.vert", "shaders/terrain.frag")
        this.terrain = new CGFtexture(scene, "images/terrain.jpg");
        this.heightMap = new CGFtexture(scene, "images/myHeightmap.jpg");
        this.appearance = new CGFappearance(scene);
		this.appearance.setAmbient(0.3, 0.3, 0.3, 1);
		this.appearance.setDiffuse(0.7, 0.7, 0.7, 1);
		this.appearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.appearance.setShininess(120);
        this.appearance.setTexture(this.terrain);
		this.appearance.setTextureWrap('REPEAT', 'REPEAT');
        
        this.shader.setUniformsValues({ uSampler1: 1 });
		this.shader.setUniformsValues({ uSampler2: 2 });
    }

    display(){
        this.appearance.apply();

        this.scene.setActiveShader(this.shader);
        this.scene.pushMatrix();

        this.terrain.bind(1);
        this.heightMap.bind(2);

        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_WRAP_S, this.scene.gl.REPEAT);
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_WRAP_T, this.scene.gl.REPEAT);
        
        this.scene.pushMatrix();
        this.scene.rotate(-0.5*Math.PI, 1, 0, 0);
        this.scene.scale(100, 100, 1);
        this.plane.display();
        this.scene.popMatrix();

        this.scene.setActiveShader(this.scene.defaultShader);
    }
}