attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
varying float offset;
uniform sampler2D uSampler2;

uniform float timeFactor;

void main() {
	vec4 filter = texture2D(uSampler2, aTextureCoord);
	offset = (filter.r + filter.g + filter.b) / 3.0;

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition.xy,aVertexPosition.z+offset * 10.0, 1.0);

	vTextureCoord = aTextureCoord;
}

