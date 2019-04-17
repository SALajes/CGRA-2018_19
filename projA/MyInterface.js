/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();

        this.gui.add(this.scene, 'displayAxis').name("Display axis");
        this.gui.add(this.scene, 'textures').name("Textures").onChange(this.scene.updateTextures.bind(this.scene));
        this.gui.add(this.scene, 'scaleFactor', 0.1, 10.0).name('Scale');
        //Drop-down menu
        this.gui.add(this.scene, 'mode', this.scene.modeId).onChange(this.scene.updateDayNight.bind(this.scene));


        return true;
    }
}