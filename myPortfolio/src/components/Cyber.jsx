import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, Center } from "@react-three/drei";
import * as THREE from "three";

const MODEL_PATH = `${import.meta.env.BASE_URL}models/Cyber.glb`;

const EMISSIVE_MAP = {
  "Glass": {
    emissive: new THREE.Color(0.755, 0.022, 1.0),
    emissiveIntensity: 2.0,
  },
  "LightBlue": {
    emissive: new THREE.Color(0.0, 0.252, 1.0),
    emissiveIntensity: 2.5,
  },
  "LightOrange": {
    emissive: new THREE.Color(1.0, 0.185, 0.004),
    emissiveIntensity: 2.0,
  },
};

const SCALE_MOBILE  = 0.25; 
const SCALE_TABLET  = 0.3; 
const SCALE_DESKTOP = 0.42;

function Model() {
  const { scene } = useGLTF(MODEL_PATH);
  const { size } = useThree();
  const groupRef = useRef();

  useEffect(() => {
    scene.traverse((obj) => {
      if (!obj.isMesh) return;
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      mats.forEach((mat) => {
        if (!mat) return;
        const em = EMISSIVE_MAP[mat.name];
        if (em && mat.emissive !== undefined) {
          mat.emissive.copy(em.emissive);
          mat.emissiveIntensity = em.emissiveIntensity;
        }
        if (mat.metalness !== undefined) mat.metalness = Math.min(mat.metalness, 0.4);
        if (mat.roughness !== undefined) mat.roughness = Math.max(mat.roughness, 0.4);
        mat.needsUpdate = true;
      });
    });
  }, [scene]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    const vw = size.width;
    const s = vw < 768 ? SCALE_MOBILE : vw < 1024 ? SCALE_TABLET : SCALE_DESKTOP;
    groupRef.current.scale.set(s, s, s);
    groupRef.current.rotation.y += delta * 0.3;
  });

  return (
    <group ref={groupRef}>
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

function Loader() {
  return (
    <mesh>
      <boxGeometry args={[0.6, 0.6, 0.6]} />
      <meshStandardMaterial color="#2563eb" wireframe />
    </mesh>
  );
}

export default function Cyber({ size = "100%" }) {
  return (
    <div style={{
      width: "100%",
      height: typeof size === "number" ? size : "100%",
      overflow: "hidden",
    }}>
      <Canvas
        style={{ width: "100%", height: "100%", display: "block" }}
        camera={{ position: [0, 0, 7], fov: 42 }}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.3,
        }}
      >
        <hemisphereLight skyColor="#4a5fff" groundColor="#0a0a1a" intensity={0.1} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[4, 6, 4]}   intensity={2.4} color="#ffffff" />
        <directionalLight position={[-4, 2, -3]} intensity={1.8} color="#cce0ff" />
        <pointLight       position={[0, 3, 2]}   intensity={2.0} color="#ffffff" />
        <pointLight       position={[-3, -1, 3]} intensity={1.6} color="#8899ff" />

        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI * 0.72}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/Cyber.glb`);