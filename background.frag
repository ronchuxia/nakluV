#version 450

layout(location = 0) out vec4 outColor;
layout(location = 0) in vec2 position;
layout(push_constant) uniform Push {
    float time;
};

void main() {
    // outColor = vec4( fract(gl_FragCoord.x / 100), gl_FragCoord.y / 400, 0.2, 1.0 );
    // outColor = vec4( sin(gl_FragCoord.x / 50), cos(gl_FragCoord.y / 50), 0.2, 1.0);
    // outColor = vec4( gl_FragCoord.x / 800, gl_FragCoord.y / 540, 0.0, 1.0 );
    
    //with in
    // outColor = vec4(position, 0.0, 0.0);
    // outColor = vec4( fract(position.x * 5), position.y, 0.2, 1.0 );

    //with push_constant
    outColor = vec4(fract(position.x + time), position.y, 0.0, 1.0);
}