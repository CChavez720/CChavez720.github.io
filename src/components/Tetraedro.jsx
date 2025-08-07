import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Tetraedro() {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.y += 0.005;
    mesh.current.rotation.x += 0.003;
  });

  const geometry = useMemo(() => {
    const geom = new THREE.TetrahedronGeometry(2);
    const faceColors = [
      new THREE.Color("#38bdf8"), // neon-blue
      new THREE.Color("#ec4899"), // glitch-pink
      new THREE.Color("#ffffff"), // white
      new THREE.Color("#9333ea"), // purple
    ];

    const colors = [];

    for (let i = 0; i < geom.attributes.position.count; i++) {
      const faceIndex = Math.floor(i / 3) % 4;
      const color = faceColors[faceIndex];
      colors.push(color.r, color.g, color.b);
    }

    geom.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    return geom;
  }, []);

  return (
    <mesh ref={mesh} geometry={geometry}>
      <meshStandardMaterial vertexColors flatShading />
    </mesh>
  );
}

export default function Piramide3D() {
  return (
    <div className="absolute w-full h-full top-0 left-0 z-0 opacity-20 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Tetraedro />
      </Canvas>
    </div>
  );
}
