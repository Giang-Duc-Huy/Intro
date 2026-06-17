import * as THREE from "three";

const HeroLights = () => (
  <>
    {/* ambient tổng thể — tăng mạnh để sáng base */}
    <ambientLight intensity={1.2} color="#c8b8ff" />

    {/* đèn chính từ trên — trắng mạnh */}
    <spotLight
      position={[2, 8, 6]}
      angle={0.25}
      penumbra={0.3}
      intensity={200}
      color="#ffffff"
      castShadow
    />

    {/* fill xanh cyan từ bên trái */}
    <spotLight
      position={[-5, 6, 5]}
      angle={0.4}
      penumbra={0.6}
      intensity={20}
      color="#00d4ff"
    />

    {/* fill tím từ phải */}
    <spotLight
      position={[5, 5, 3]}
      angle={0.35}
      penumbra={0.7}
      intensity={50}
      color="#bf00ff"
    />

    {/* đèn từ dưới lên — cyberpunk rim */}
    <pointLight position={[0, -1, 3]} intensity={10} color="#00ffff" />

    {/* RectAreaLight cho soft fill */}
    <primitive
      object={new THREE.RectAreaLight("#a259ff", 15, 4, 3)}
      position={[0, 4, 5]}
      rotation={[-Math.PI / 5, 0, 0]}
    />

    {/* back light để không bị flat */}
    <pointLight position={[-2, 3, -3]} intensity={40} color="#7209b7" />
    <pointLight position={[2, 2, -2]} intensity={30} color="#0d00a4" />
  </>
);

export default HeroLights;