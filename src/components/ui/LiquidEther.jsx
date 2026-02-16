import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function LiquidEther({
    colors = ["#5227FF", "#FF9FFC", "#B19EEF"],
    mouseForce = 20,
    cursorSize = 100,
    isViscous = true,
    viscous = 30,
    iterationsViscous = 32,
    iterationsPoisson = 32,
    resolution = 0.5,
    isBounce = false,
    autoDemo = true,
    autoSpeed = 0.5,
    autoIntensity = 2.2,
    takeoverDuration = 0.25,
    autoResumeDelay = 3000,
    autoRampDuration = 0.6,
    color0 = "#d76609",
    color1 = "#da5a16",
    color2 = "#e16d0e",
}) {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        // SCENE SETUP
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        mount.appendChild(renderer.domElement);

        // UNIFORMS & SHADER
        const uniforms = {
            uTime: { value: 0 },
            uResolution: { value: new THREE.Vector2(mount.clientWidth, mount.clientHeight) },
            uColor1: { value: new THREE.Color(colors[0]) },
            uColor2: { value: new THREE.Color(colors[1]) },
            uColor3: { value: new THREE.Color(colors[2]) },
            uMouse: { value: new THREE.Vector2(0, 0) },
            uMouseForce: { value: mouseForce },
            uCursorSize: { value: cursorSize },
        };

        const material = new THREE.ShaderMaterial({
            uniforms,
            vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
            fragmentShader: `
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        uniform vec2 uMouse;
        uniform float uMouseForce;
        uniform float uCursorSize;
        varying vec2 vUv;

        // Simplex 2D noise
        vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
        float snoise(vec2 v){
          const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                   -0.577350269189626, 0.024390243902439);
          vec2 i  = floor(v + dot(v, C.yy) );
          vec2 x0 = v -   i + dot(i, C.xx);
          vec2 i1;
          i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod(i, 289.0);
          vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
          + i.x + vec3(0.0, i1.x, 1.0 ));
          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
          m = m*m ;
          m = m*m ;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
          vec3 g;
          g.x  = a0.x  * x0.x  + h.x  * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
        }

        void main() {
          vec2 uv = vUv;
          
          // Fluid motion based on noise
          float time = uTime * 0.2;
          float noise1 = snoise(uv * 3.0 + time);
          float noise2 = snoise(uv * 5.0 - time * 0.5);
          float noise3 = snoise(uv * 2.0 + time * 0.8);

          // Distort UVs based on noise + mouse interaction
          vec2 distortedUv = uv + vec2(noise1, noise2) * 0.1;
          
          // Mouse interaction (ripple effect)
          float dist = distance(uv * uResolution, uMouse);
          float interaction = smoothstep(uCursorSize * 2.0, 0.0, dist) * uMouseForce * 0.001;
          distortedUv += interaction * vec2(snoise(uv * 10.0), snoise(uv * 10.0 + 10.0));

          // Color mixing
          vec3 color = mix(uColor1, uColor2, noise1 * 0.5 + 0.5);
          color = mix(color, uColor3, noise2 * 0.5 + 0.5);
          
          // Add some brightness/contrast
          color += noise3 * 0.1;

          gl_FragColor = vec4(color, 1.0);
        }
      `,
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // ANIMATION LOOP
        const animate = () => {
            uniforms.uTime.value += 0.01;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        // RESIZE HANDLER
        const handleResize = () => {
            const { clientWidth, clientHeight } = mount;
            renderer.setSize(clientWidth, clientHeight);
            uniforms.uResolution.value.set(clientWidth, clientHeight);
        };
        window.addEventListener("resize", handleResize);

        // MOUSE HANDLER
        const handleMouseMove = (e) => {
            const rect = mount.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = rect.height - (e.clientY - rect.top); // Flip Y for shader
            uniforms.uMouse.value.set(x, y);
        };
        mount.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("resize", handleResize);
            mount.removeEventListener("mousemove", handleMouseMove);
            if (mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, [colors, cursorSize, mouseForce]);

    return <div ref={mountRef} className="w-full h-full relative" />;
}
