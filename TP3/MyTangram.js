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

        initMaterials(scene) {
                // Orange Specular (no diffuse / ambient)
                this.orange = new CGFappearance(scene);
                this.orange.setAmbient(0, 0, 0, 1.0);
                this.orange.setDiffuse(0, 0, 0, 1.0);
                this.orange.setSpecular(1, 156 / 255, 0, 1.0);
                this.orange.setShininess(10.0);

                //Blue Specular (no diffuse / ambient)
                this.blue = new CGFappearance(scene);
                this.blue.setAmbient(0, 0, 0, 1.0);
                this.blue.setDiffuse(0, 0, 0, 1.0);
                this.blue.setSpecular(0, 156 / 255, 1, 1.0);
                this.blue.setShininess(10.0);

                //Yellow Specular
                this.yellow = new CGFappearance(scene);
                this.yellow.setAmbient(0, 0, 0, 1.0);
                this.yellow.setDiffuse(0, 0, 0, 1.0);
                this.yellow.setSpecular(1, 1, 0, 1.0);
                this.yellow.setShininess(10.0);

                //Green Specular
                this.green = new CGFappearance(scene);
                this.green.setAmbient(0, 0, 0, 1.0);
                this.green.setDiffuse(0, 0, 0, 1.0);
                this.green.setSpecular(0, 1, 0, 1.0);
                this.green.setShininess(10.0);

                //Pink Specular
                this.pink = new CGFappearance(scene);
                this.pink.setAmbient(0, 0, 0, 1.0);
                this.pink.setDiffuse(0, 0, 0, 1.0);
                this.pink.setSpecular(1, 156 / 255, 210 / 255, 1.0);
                this.pink.setShininess(10.0);

                //Red Specular
                this.red = new CGFappearance(scene);
                this.red.setAmbient(0, 0, 0, 1.0);
                this.red.setDiffuse(0, 0, 0, 1.0);
                this.red.setSpecular(1, 20 / 255, 20 / 255, 1.0);
                this.red.setShininess(10.0);

                //Purple Specular
                this.purple = new CGFappearance(scene);
                this.purple.setAmbient(0, 0, 0, 1.0);
                this.purple.setDiffuse(0, 0, 0, 1.0);
                this.purple.setSpecular(170 / 255, 79 / 255, 194 / 255, 1.0);
                this.purple.setShininess(10.0);
        }

        display(scene) {
                // ---- BEGIN Primitives Transformation
                //Diamond
                var t1 = [1, 0, 0, 0,
                        0, 1, 0, 0,
                        0, 0, 1, 0,
                        0.5, 4.5, 0, 1
                ];

                scene.pushMatrix();
                scene.multMatrix(t1);
                this.green.apply();
                this.diamond.display();
                scene.popMatrix();

                //Big Triangle 1
                scene.pushMatrix();
                scene.translate(0, 2, 0);
                scene.rotate((-Math.PI / 2), 0, 0, 1);
                this.orange.apply();
                this.bigtriangle.display()
                scene.popMatrix();

                //Big Triangle 2
                scene.pushMatrix();
                scene.translate(1, -1, 0);
                scene.rotate((Math.PI / 2), 0, 0, 1);
                this.blue.apply();
                this.bigtriangle.display();
                scene.popMatrix();

                //Triangle
                scene.pushMatrix();
                scene.translate(-1, -(Math.sqrt(2) + 1), 0);
                scene.rotate(-(135 * Math.PI) / 180, 0, 0, 1);
                this.pink.apply();
                this.triangle.display();
                scene.popMatrix();

                //Parallelogram
                scene.pushMatrix();
                scene.scale(-1, 1, 1);
                scene.rotate((-Math.PI / 2), 0, 0, 1);
                scene.translate(-2, 0, 0);
                this.yellow.apply();
                this.parallelogram.display();
                scene.popMatrix();

                //Small Triangle 1
                scene.pushMatrix();
                scene.translate(-1 + Math.sqrt(0.5) + Math.sqrt(2), -(3 / 2 * Math.sqrt(2) + 1), 0);
                scene.rotate((135 * Math.PI) / 180, 0, 0, 1);
                this.purple.apply()
                this.smalltriangle.display();
                scene.popMatrix();

                //Small Triangle 2
                scene.pushMatrix();
                scene.translate(-(1 + Math.sqrt(2)), -(1 + Math.sqrt(2) + Math.sqrt(0.5)), 0);
                scene.rotate(Math.PI / 4, 0, 0, 1);
                this.red.apply();
                this.smalltriangle.display();
                scene.popMatrix();
                // ---- END Primitives Transformation
        }
}