// Tetraedro.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function TetraedroMesh() {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.005;
    mesh.current.rotation.x += 0.003;
  });

  const geometry = useMemo(() => {
    const geom = new THREE.TetrahedronGeometry(2);
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
    <mesh ref={mesh} geometry={geometry}>
      <meshStandardMaterial vertexColors flatShading />
    </mesh>
  );
}

export default function Tetraedro3D({ className = "" }) {
  return (
    <div className={`pointer-events-none opacity-30 ${className}`}>
      <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <TetraedroMesh />
      </Canvas>
    </div>
  );
}
