class MyLSplant extends MyLSystem {
    constructor(scene, xTranslate, yTranslate, zTranslate) {
        super(scene);

        this.initValues();
        this.xTranslate = xTranslate;
        this.yTranslate = yTranslate;
        this.zTranslate = zTranslate;
    }

    initValues() {
        this.axiom = "X";
        this.angle = 30.0;
        this.iterations = 4;
        this.scaleFactor = 0.8;
    }

    initGrammar() {
        this.grammar = {
            "F": new MyBranch(this.scene),
            "X": new MyLeaf(this.scene)
        };
    }

    doGenerate() {
        this.initValues();
        super.generate(
            this.axiom, {
                "F": ["FF"],
                "X": ["F[-X][X]F[-X]+X",
                    "F[-X][X]+X",
                    "F[+X]-X",
                    "F[/X][X]F[\\X]+X",
                    "F[\\X][X]/X",
                    "F[/X]\\X",
                    "F[^X][X]F[&X]^X",
                    "F[^X]&X",
                    "F[&X]^X"
                ]
            },
            this.angle,
            this.iterations,
            this.scaleFactor
        );
    }
    display() {
        this.scene.pushMatrix();
        this.scene.translate(this.xTranslate, this.yTranslate, this.zTranslate);
        super.display();
        this.scene.popMatrix();
    }
}