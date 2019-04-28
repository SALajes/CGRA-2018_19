
attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
uniform sampler2D uSampler2;

uniform float timeFactor;
uniform float normScale;
varying vec4 coords;

void main() {
	float offset=normScale*0.1*sin(timeFactor);
    vTextureCoord=aTextureCoord;

	coords = uPMatrix * uMVMatrix * vec4(aVertexPosition.x+offset,aVertexPosition.yz, 1.0);
    gl_Position = coords;
}