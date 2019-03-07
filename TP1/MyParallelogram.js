class MyParallelogram extends CGFobject {
  constructor(scene) {
    super(scene);
    this.initBuffers();
  }
  initBuffers() {
    this.vertices = [
      0, 0, 0, //0
      1, 0, 0, //1
      1, 1, 0, //2
      2, 0, 0, //3
      2, 1, 0, //4
      3, 1, 0 //5
    ];

    //Duplicated indexes because of the double-sided property
    this.indices = [
      0, 1, 2,
      2, 1, 0,
      1, 2, 4,
      4, 2, 1,
      1, 3, 4,
      4, 3, 1,
      3, 4, 5,
      5, 4, 3
    ];

    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers();
  }
}