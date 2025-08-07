import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Piramide() {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.y += 0.005;
  });

  const geometry = useMemo(() => {
    const geom = new THREE.ConeGeometry(2, 2.5, 4, 1); // base cuadrada, pirámide
    const faceColors = [
      new THREE.Color("#38bdf8"), // neon-blue
      new THREE.Color("#ec4899"), // glitch-pink
      new THREE.Color("#ffffff"), // white
      new THREE.Color("#9333ea"), // purple
    ];

    const colors = [];

    for (let i = 0; i < geom.attributes.position.count; i++) {
      const faceIndex = Math.floor(i / 3) % 4;
      colors.push(faceColors[faceIndex].r, faceColors[faceIndex].g, faceColors[faceIndex].b);
    }

    geom.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    return geom;
  }, []);

  return (
    <mesh ref={mesh} geometry={geometry} rotation={[0.7, 0.5, 0]}>
      <meshStandardMaterial vertexColors flatShading />
    </mesh>
  );
}

export default function Piramide3D() {
  return (
    <div className="absolute w-full h-full top-0 left-0 z-0 opacity-20 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} />
        <Piramide />
      </Canvas>
    </div>
  );
}
