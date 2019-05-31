/**
 * MyBranches
 * @constructor
 */
class MyBranches extends CGFobject {
    constructor(scene) {
        super(scene);

        this.branches = [];
        this.x = [];
        this.z = [];
        this.angle = [];

        this.branch_number = (Math.random() * 4) + 4;

        for(var i=0; i < this.branch_number; i++){
            this.branches.push(new MyTreeBranch(this.scene));
            this.x.push((Math.random() * 20) - 10);
            this.z.push((Math.random() * 12) - 10);
            this.angle.push(Math.PI*(Math.random() * 360)/180);
        }
    }
    display(){
        for(var i = 0; i < this.branch_number; i++){
            this.scene.pushMatrix();
            this.scene.translate(this.x[i], 0, this.z[i]);
            this.scene.rotate(this.angle[i], 0, 1, 0);
            this.branches[i].display();
            this.scene.popMatrix();
        }
    }
}