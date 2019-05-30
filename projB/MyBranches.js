/**
 * MyBranches
 * @constructor
 */
class MyBranches extends CGFobject {
    constructor(scene) {
        super(scene);

        this.branchs = [];

        this.brach_number = (Math.random() * 4) + 4;

        for(var i=0; i < brach_number; i++){
            branchs.push(new MyTreeBranch(this.scene));
        }
    }
    display(){
        for(var i = 0; i < branch_number; i++){
            angle = Math.random() * 360;

            angle = Math.PI*angle/180;

            this.scene.pushMatrix();
            this.scene.rotate(angle, 0, 1, 0);
            this.branch.display();
            this.scene.popMatrix();
        }
    }
}