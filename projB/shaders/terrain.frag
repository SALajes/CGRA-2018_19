#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying float offset;

uniform sampler2D uSampler1;
uniform sampler2D uSampler3;
uniform float timeFactor;

void main() {
	vec4 color = texture2D(uSampler1, vTextureCoord);
	vec4 altimetry = texture2D(uSampler3, vec2(0.5,1.0 - offset));
	
	gl_FragColor = color * 0.4 + altimetry * 0.6;
}