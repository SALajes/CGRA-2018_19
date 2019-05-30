class MyLightning extends MyLSystem {
    constructor(scene) {
        super(scene);

        this.initValues();
        this.initGrammar();
    }

    initValues() {
        this.axiom = "X";
        this.angle = 25.0;
        this.iterations = 3;
        this.scaleFactor = 0.5;
    }

    initGrammar() {
        this.grammar = {
            "F": new MyRectangle(this.scene, 0.2, 1),
            "X": new MyRectangle(this.scene, 0.2, 1)
        };
    }

    doGenerate() {
        this.initValues();
        super.generate(
            this.axiom,
            {
                "F": [ "FF" ],
                "X": [ "F[-X][X]F[-X]+FX",
                        "[X+X+X--FX]+F-X[F-X+X]",
                        "[X-X-X]FF+X--X[+X+F]",
                        "[-x]X[+X]" ]
            },
            this.angle,
            this.iterations,
            this.scaleFactor
        );
    }

    display() {
        this.scene.pushMatrix();
        this.scene.scale(1.0,-1.0,1.0);
        super.display();
        this.scene.popMatrix();
    }
}