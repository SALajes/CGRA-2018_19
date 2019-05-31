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
            "F": new MySegment(this.scene),
            "X": new MySegment(this.scene)
        };
    }
    doGenerate() {
        this.initValues();
        super.generate(
            this.axiom,
            {
                "F": [ "FF" ],
                "X": [ "F[-X][X]F[-X]+FX",
                        "F[+X][X]F[+X]-FX",
                        "[-X]X[+X]"]
            },
            this.angle,
            this.iterations,
            this.scaleFactor
        );
    }
    update(t) {
        this.elapsedTime = t - this.startTime;
        if(this.elapsedTime != 0)
            this.depth = (this.elapsedTime * this.axiom.length)/ 1000;
        console.log(this.depth);
        if(this.elapsedTime >= 1000){
            console.log(this.axiom.length);
            return true;
        }
    }
    startAnimation(t) {
        this.doGenerate();
        this.depth = 0;
        this.startTime = t;
        this.angle = Math.random();
        console.log(this.startTime);
    }
    display(){
        this.scene.pushMatrix();
        this.scene.rotate(this.angle, 0, 1, 0);
        this.scene.translate(0, 50, 0);
        this.scene.scale(2.0,-2.0,1.0);

        var i;

        // percorre a cadeia de caracteres
        for (i=0; i<this.depth; ++i){

            // verifica se sao caracteres especiais
            switch(this.axiom[i]){
                case "+":
                    // roda a esquerda
                    this.scene.rotate(this.angle, 0, 0, 1);
                    break;

                case "-":
                    // roda a direita
                    this.scene.rotate(-this.angle, 0, 0, 1);
                    break;

                case "[":
                    // push
                    this.scene.pushMatrix();
                    break;

                case "]":
                    // pop
                    this.scene.popMatrix();
                    break;

                case "\\":
                    this.scene.rotate(this.angle, 1, 0, 0);
                    break;

                case "/":
                    this.scene.rotate(-this.angle, 1, 0, 0);
                    break;

                case "^":
                    this.scene.rotate(this.angle, 0, 1, 0);
                    break;

                case "&":
                    this.scene.rotate(-this.angle, 0, 1, 0);
                    break;

                // processa primitiva definida na gramatica, se existir
                default:
                    var primitive=this.grammar[this.axiom[i]];

                    if ( primitive )
                    {
                        primitive.display();
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }
        }
        this.scene.popMatrix();
    }
}