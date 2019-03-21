/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
        constructor(scene) {
                super(scene);

                //Objects part of the Tangram
                this.diamond = new MyDiamond(scene);
                this.triangle = new MyTriangle(scene);
                this.bigtriangle = new MyTriangleBig(scene);
                this.smalltriangle = new MyTriangleSmall(scene);
                this.parallelogram = new MyParallelogram(scene);
                this.initMaterials(scene);
        }

        enableNormalViz(){
                this.diamond.enableNormalViz();
                this.triangle.enableNormalViz();
                this.bigtriangle.enableNormalViz();
                this.smalltriangle.enableNormalViz();
                this.parallelogram.enableNormalViz();
        }

        disableNormalViz(){
                this.diamond.disableNormalViz();
                this.triangle.disableNormalViz();
                this.bigtriangle.disableNormalViz();
                this.smalltriangle.disableNormalViz();
                this.parallelogram.disableNormalViz();
        }

        initMaterials(scene) {
                this.texture = new CGFappearance(scene);
                this.texture.setAmbient(0.1, 0.1, 0.1, 1.0);
                this.texture.setDiffuse(0.1, 0.1, 0.1, 1.0);
                this.texture.setSpecular(0.9, 0.9, 0.9, 1.0);
                this.texture.setShininess(10.0);
                this.texture.loadTexture('images/tangram.png');
                this.texture.setTextureWrap('REPEAT', 'REPEAT');
        }

        display() {
                // ---- BEGIN Primitives Transformation
                this.texture.apply();

                //Diamond
                var t1 = [1, 0, 0, 0,
                        0, 1, 0, 0,
                        0, 0, 1, 0,
                        0.5, 4.5, 0, 1
                ];

                this.scene.pushMatrix();
                this.scene.multMatrix(t1);
                this.diamond.display();
                this.scene.popMatrix();

                //Big Triangle 1
                this.scene.pushMatrix();
                this.scene.translate(0, 2, 0);
                this.scene.rotate((-Math.PI / 2), 0, 0, 1);
                this.bigtriangle.display()
                this.scene.popMatrix();

                //Big Triangle 2
                this.scene.pushMatrix();
                this.scene.translate(1, -1, 0);
                this.scene.rotate((Math.PI / 2), 0, 0, 1);
                this.bigtriangle.display();
                this.scene.popMatrix();

                //Triangle
                this.scene.pushMatrix();
                this.scene.translate(-1, -(Math.sqrt(2) + 1), 0);
                this.scene.rotate(-(135 * Math.PI) / 180, 0, 0, 1);
                this.triangle.display();
                this.scene.popMatrix();

                //Parallelogram
                this.scene.pushMatrix();
                this.scene.scale(-1, 1, 1);
                this.scene.rotate((-Math.PI / 2), 0, 0, 1);
                this.scene.translate(-2, 0, 0);
                this.parallelogram.display();
                this.scene.popMatrix();

                //Small Triangle 1
                this.scene.pushMatrix();
                this.scene.translate(-1 + Math.sqrt(0.5) + Math.sqrt(2), -(3 / 2 * Math.sqrt(2) + 1), 0);
                this.scene.rotate((135 * Math.PI) / 180, 0, 0, 1);
                this.smalltriangle.display();
                this.scene.popMatrix();

                //Small Triangle 2
                this.scene.pushMatrix();
                this.scene.translate(-(1 + Math.sqrt(2)), -(1 + Math.sqrt(2) + Math.sqrt(0.5)), 0);
                this.scene.rotate(Math.PI / 4, 0, 0, 1);
                this.smalltriangle.display();
                this.scene.popMatrix();
                // ---- END Primitives Transformation
        }
}
