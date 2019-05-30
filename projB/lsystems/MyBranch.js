class MyBranch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.cylinder = new MyCylinder(scene, 4, 1, 1);
        this.material = new CGFappearance(scene);
        this.material.setAmbient(79/255, 48/255, 0);
        this.material.setDiffuse(79/255, 48/255,0);
        this.material.setSpecular(0,0,0);
        this.material.setShininess(1.0);
    }

    display(){
        this.material.apply();
        this.cylinder.display();
    }

}