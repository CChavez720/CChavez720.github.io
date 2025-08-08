// Teseracto3D.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function TeseractoMesh() {
  const outer = useRef();
  const inner = useRef();

  useFrame((_, delta) => {
    // Giro suave y legible
    outer.current.rotation.x += 0.35 * delta;
    outer.current.rotation.y += 0.5 * delta;
    inner.current.rotation.x -= 0.25 * delta;
    inner.current.rotation.y -= 0.35 * delta;
  });

  // Materiales: visibles, con color y transparencia
  const outerMat = new THREE.MeshPhysicalMaterial({
    color: "#38bdf8", // azul neón
    roughness: 0.35,
    metalness: 0.2,
    transparent: true,
    opacity: 0.28,     // caras visibles pero dejan ver el interior
    side: THREE.DoubleSide,
  });

  const innerMat = new THREE.MeshPhysicalMaterial({
    color: "#a855f7", // púrpura
    roughness: 0.3,
    metalness: 0.25,
    transparent: true,
    opacity: 0.35,
    side: THREE.DoubleSide,
  });

  // Geometrías
  const outerGeo = new THREE.BoxGeometry(4, 4, 4);
  const innerGeo = new THREE.BoxGeometry(2.2, 2.2, 2.2);

  // Aristas (para remarcar el giro)
  const outerEdges = new THREE.EdgesGeometry(outerGeo);
  const innerEdges = new THREE.EdgesGeometry(innerGeo);

  return (
    <group>
      {/* Cubo exterior */}
      <group ref={outer}>
        <mesh geometry={outerGeo} material={outerMat} />
        <lineSegments geometry={outerEdges}>
          <lineBasicMaterial color="#60a5fa" linewidth={1} />
        </lineSegments>
      </group>

      {/* Cubo interior */}
      <group ref={inner}>
        <mesh geometry={innerGeo} material={innerMat} />
        <lineSegments geometry={innerEdges}>
          <lineBasicMaterial color="#f472b6" linewidth={1} />
        </lineSegments>
      </group>
    </group>
  );
}

export default function Teseracto3D({ className = "" }) {
  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}>
      <Canvas camera={{ position: [0, 0, 8] }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 6, 3]} intensity={0.9} />
        <TeseractoMesh />
      </Canvas>
    </div>
  );
}
