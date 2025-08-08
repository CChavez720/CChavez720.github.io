// Piramide3D.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function PiramideMesh() {
  const mesh = useRef();
  useFrame(() => { mesh.current.rotation.y += 0.005; });

  const geometry = useMemo(() => {
    const geom = new THREE.ConeGeometry(2, 2.5, 4, 1); // pirámide base cuadrada
    const faceColors = [
      new THREE.Color("#38bdf8"),
      new THREE.Color("#ec4899"),
      new THREE.Color("#ffffff"),
      new THREE.Color("#9333ea"),
    ];
    const colors = [];
    for (let i = 0; i < geom.attributes.position.count; i++) {
      const faceIndex = Math.floor(i / 3) % 4;
      const c = faceColors[faceIndex];
      colors.push(c.r, c.g, c.b);
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

export default function Piramide3D({ className = "" }) {
  return (
    <div className={`pointer-events-none opacity-30 ${className}`}>
      <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} />
        <PiramideMesh />
      </Canvas>
    </div>
  );
}
