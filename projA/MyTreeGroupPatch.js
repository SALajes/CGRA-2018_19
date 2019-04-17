/**
* MyTreeGroupPatch
* @constructor
*/
class MyTreeGroupPatch extends CGFobject {
    constructor(scene){
        super(scene);
        
        this.group1 = new MySmallTreeRow(scene);
        this.group2 = new MySmallTreeRow(scene);
        this.group3 = new MySmallTreeRow(scene);
    }
    display() {
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 12);
        this.group3.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 6);
        this.group2.display();
        this.scene.popMatrix();

        this.group1.display();
    }
}
