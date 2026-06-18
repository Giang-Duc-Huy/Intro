import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";
import { Suspense } from "react";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      frameloop="demand"
      dpr={[1, 1.5]}
      shadows={false}
      gl={{ antialias: false, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={1} color="#1a1a40" />

      {/*
        autoRotate       — tự xoay liên tục
        autoRotateSpeed  — tốc độ xoay (số dương = ngược chiều kim đồng hồ)
        Người dùng vẫn kéo/xoay bình thường; khi thả tay model xoay tiếp.
      */}
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        autoRotate={true}
        autoRotateSpeed={2.5}
      />

      <Suspense fallback={null}>
        <HeroLights />
        <group
          scale={isMobile ? 0.5 : 0.9}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room bloom={!isMobile} />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;