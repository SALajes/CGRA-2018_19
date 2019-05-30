class MyLSplant extends MyLSystem {
    constructor(scene) {
        super(scene);

        this.axiom = "X";
        this.angle = 30.0;
        this.iterations = 4;
        this.scaleFactor = 0.5;
    }

    initGrammar() {
        this.grammar = {
            "F": new MyBranch(this.scene),
            "X": new MyLeaf(this.scene)
        };
    }

    doGenerate() {
        super.generate(
            this.axiom,
            {
                "F": [ "FF" ],
                "X": [ "F[-X][X]F[-X]+X",
                    "F[-X][X]+X",
                    "F[+X]-X",
                    "F[/X][X]F[\\X]+X",
                    "F[\\X][X]/X",
                    "F[/X]\\X",
                    "F[^X][X]F[&X]^X",
                    "F[^X]&X",
                    "F[&X]^X" ]
            },
            this.angle,
            this.iterations,
            this.scaleFactor
        );
    }

    display() {
        this.doGenerate();
        super.display();
    }
}