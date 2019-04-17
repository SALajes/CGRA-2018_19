/**
* MyTreeRowPatch
* @constructor
*/
class MyTreeRowPatch extends CGFobject {
    constructor(scene){
        super(scene);
        
        this.group1 = new MySmallTreeRow(scene);
        this.group2 = new MySmallTreeRow(scene);
    }
    display() {
        this.scene.pushMatrix();
        this.scene.translate(18, 0, 0);
        this.group2.display();
        this.scene.popMatrix();

        this.group1.display();
    }
}
